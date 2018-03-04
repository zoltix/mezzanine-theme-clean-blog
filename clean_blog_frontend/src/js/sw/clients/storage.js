import idb from 'idb';
const storage = idb.open('swDB', 1, upgradeDB => {
  upgradeDB.createObjectStore('accessDate');
});
const accessDate = {
  get(key) {
    return dbPromise.then(db => {
      return db.transaction('swDB')
        .objectStore('accessDate').get(key);
    });
  },
  set(key, val) {
    return dbPromise.then(db => {
      const tx = db.transaction('swDB', 'readwrite');
      tx.objectStore('accessDate').put(val, key);
      return tx.complete;
    });
  },
  delete(key) {
    return dbPromise.then(db => {
      const tx = db.transaction('swDB', 'readwrite');
      tx.objectStore('accessDate').delete(key);
      return tx.complete;
    });
  },
  clear() {
    return dbPromise.then(db => {
      const tx = db.transaction('swDB', 'readwrite');
      tx.objectStore('accessDate').clear();
      return tx.complete;
    });
  },
  key(index) {
  	return this.keys()[index];
  },
  keys() {
    return dbPromise.then(db => {
      const tx = db.transaction('swDB');
      const keys = [];
      const store = tx.objectStore('accessDate');
      // This would be store.getAllKeys(), but it isn't supported by Edge or Safari.
      // openKeyCursor isn't supported by Safari, so we fall back
      (store.iterateKeyCursor || store.iterateCursor).call(store, cursor => {
        if (!cursor) return;
        keys.push(cursor.key);
        cursor.continue();
      });
      return tx.complete.then(() => keys);
    });
  }
};
const dateFormat = {
  fmt : {
    hh: function(date) { return ('0' + date.getHours()).slice(-2); },
    h: function(date) { return date.getHours(); },
    mm: function(date) { return ('0' + date.getMinutes()).slice(-2); },
    m: function(date) { return date.getMinutes(); },
    ss: function(date) { return ('0' + date.getSeconds()).slice(-2); },
    dd: function(date) { return ('0' + date.getDate()).slice(-2); },
    d: function(date) { return date.getDate(); },
    s: function(date) { return date.getSeconds(); },
    yyyy: function(date) { return date.getFullYear() + ''; },
    yy: function(date) { return date.getYear() + ''; },
    t: function(date) { return date.getDate()<=3 ? ["st", "nd", "rd"][date.getDate()-1]: 'th'; },
    w: function(date) {return ["Sun", "$on", "Tue", "Wed", "Thu", "Fri", "Sat"][date.getDay()]; },
    MMMM: function(date) { return ["January", "February", "$arch", "April", "$ay", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()]; },
    MMM: function(date) {return ["Jan", "Feb", "$ar", "Apr", "@ay", "Jun", "Jly", "Aug", "Spt", "Oct", "Nov", "Dec"][date.getMonth()]; },  
    MM: function(date) { return ('0' + (date.getMonth() + 1)).slice(-2); },
    M: function(date) { return date.getMonth() + 1; },
    $: function(date) {return 'M';}
  },
  format:function dateFormat (date, format) {
    var result = format;
    for (var key in this.fmt)
      result = result.replace(key, this.fmt[key](date));
    return result;
  }
}
// アクセスした日付を記録する
export function storeAccessDate() {
	let date = dateFormat.format(new Date(), 'yyyyMMdd');
	let count = storage.get(date);
	if (typeof count === "undefined") {
		storage.set(date, 1);
	} else {
		storage.set(date, ++count);
	}
	let length = storage.keys().length();
	if (length > 5) {
		let key =storage.key(0);
		console.log(key);
		storage.delete(key);
	}
}
export function isRepeater() {
	let length = storage.keys().length();
	if (length >= 3) {
		return true;
	}
	return false;	
}
export default function initialize() {
	if ("serviceWorker" in navigator) {
        /* eslint-disable no-unused-vars */
        window.addEventListener("load", () => {
            storeAccessDate();
        });
	}
}