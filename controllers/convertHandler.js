/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    return parseFloat(input);
  };
  
  this.getUnit = function(input) {
    return input.replace(/(\d|\.)+/, '');
  };
  
  this.getReturnUnit = function(initUnit) {
    const unit = [
      ['gal', 'L'],
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
    
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
