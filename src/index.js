function info() {
    const m = new Map();
    m.set('name', 'ajs03');
    m.set('version', '1.0.0');
    return m;
  }
  
  export default {
    info
  };

  const ajs = require('@kksyai/ajs03');
  console.log(ajs.info());