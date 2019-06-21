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
    if(!m) return 1;
    
    try
      {
        return eval(m[0]);
      }
    catch(error)
      {
        return 'invalid number';
      }
  };
  
  this.getUnit = function(input) {
    const m = input.match(/[a-zA-z]+/);
    if(!m) return 'invalid unit';
    let unit = m[0].toLowerCase();
    if(unit === 'l') return 'L';
    return ['gal', 'lbs', 'kg', 'mi', 'km'].indexOf(unit) > -1 ? unit : 'invalid unit';
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
        if(i > -1)
          return pair[Math.abs(i - 1)];
      }
  };

  this.spellOutUnit = function(unit) {
    console.log(unit);
    switch(unit)
      {
        case 'gal': return 'galileo';
        case 'L': return 'Litre';
        case 'lbs': return 'pound';
        case 'kg': return 'kilogram';
        case 'mi': return 'mile';
        case 'km': return 'kilometer';
        default: throw new Error('invalid unit');
      }
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
        default: throw new Error('invalid unit');
      }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    const plural = initNum >= 2 ? 's' : '';
    return `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${returnUnit + plural}`;
  };
  
}

module.exports = ConvertHandler;
