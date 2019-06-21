/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    const m = input.match(/\d+(?:\/|\.)?\d+/);
    if(!m)
  };
  
  this.getUnit = function(input) {
    const m = input.match(/[a-zA-z]+/);
    if(!m) return 'invalid unit';
    const unit = m[0].toLowerCase();
    return ['gal', 'l', 'lbs', 'kg', 'mi', 'km'].indexOf(unit) > -1 ? unit : 'invalid unit';
  };
  
  this.getReturnUnit = function(initUnit) {
    
    const unit = [
      ['gal', 'l'],
      ['lbs', 'kg'],
      ['mi', 'km']
    ];
    
    for(const pair of unit)
      {
        const i = pair.indexOf(initUnit);
        if(i > 0)
          return pair[Math.abc(i - 1)];
      }
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const returnUnit = this.getReturnUnit(initUnit);
    
    switch(returnUnit)
      {
        case 'l': return initUnit * galToL;
        case 'gal': return initUnit / galToL;
        case 'kg': return initUnit * lbsToKg;
        case 'lbs': return initUnit / lbsToKg;
        case 'km': return initUnit * miToKm;
        case 'km': return initUnit / miToKm;
      }
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
