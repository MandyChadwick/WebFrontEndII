if( typeof(Storage) === 'undefined' ) {
    // This means there is no web storage
  }
  
  /**
   * See if the key is in local storage
   * @param  string key
   * @return boolean
   */
  function localStorageHas (key) {
    var item = localStorage.getItem(key);
  
    return ( item !== null );
  }
  
  /**
   * go find the object in local storage
   * @param  string key
   * @return mixed
   */
  function localStorageGet (key) {
    var item = localStorage.getItem(key);
  
    if ( ! item ) return;
  
    if ( item[0] === '{' || item[0] === '[' ) return JSON.parse(item);
  
    return item;
  }
  
  /**
   * save the value in local storage
   * @param string key    
   * @param string value
   */
  function localStorageSave (key, value) {
    if ( value === undefined ) $.error("Can't store undefinded value");
  
    if ( typeof(value) === 'object' || typeof(value) === 'array' ) {
      value = JSON.stringify(value);
    }
  
    if ( typeof(value) !== 'string' ) $.error("Can't store unrecognized format value");
  
    localStorage.setItem(key, value);
  }
  
  /**
   * This removes the value from local storage
   * @param string key 
   */
  function localStorageRemove (key) {
    localStorage.removeItem(key);
  }