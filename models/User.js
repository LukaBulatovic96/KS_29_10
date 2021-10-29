const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the User Schema

const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  nadredjeni: [String],
  podredjeni: [String],
  istiNivo: [String],
  sektor: {
    type: String,
    required: true
  },
  radnoMesto:{
    type:String,
    required: true
  },
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  vqTest:{
    result:{
      type: Number
    },
    date:{
      type: Date,
      default:  Date.now
    },
    finished:{
      type: Boolean,
      default: false
    }
  },
  testLicnosti:{
    N1:{
      type: Number,
    },
    N2:{
      type: Number,
    },
    N3:{
      type: Number,
    },
    N4:{
      type: Number,
    },
    N5:{
      type: Number,
    },
    N6:{
      type: Number,
    },
    E1:{
      type: Number,
    },
    E2:{
      type: Number,
    },
    E3:{
      type: Number,
    },
    E4:{
      type: Number,
    },
    E5:{
      type: Number,
    },
    E6:{
      type: Number,
    },
    O1:{
      type: Number,
    },
    O2:{
      type: Number,
    },
    O3:{
      type: Number,
    },
    O4:{
      type: Number,
    },
    O5:{
      type: Number,
    },
    O6:{
      type: Number,
    },
    U1:{
      type: Number,
    },
    U2:{
      type: Number,
    },
    U3:{
      type: Number,
    },
    U4:{
      type: Number,
    },
    U5:{
      type: Number,
    },
    U6:{
      type: Number,
    },
    S1:{
      type: Number,
    },
    S2:{
      type: Number,
    },
    S3:{
      type: Number,
    },
    S4:{
      type: Number,
    },
    S5:{
      type: Number,
    },
    S6:{
      type: Number,
    },
    pol:{
      type: String,
    },
    date:{
      type: Date,
    },
    finished:{
      type: Boolean,
      default: false
    }
  },
  date:{
    type: Date,
    default: Date.now
  },
  stavoviZaposlenihFinished:{
    type: Boolean,
    default:false
  },
  feedBackTest:{
    ukupnoPodredjeni:{
      type:Number,
      default:0
    },
    ukupnoNadredjeni:{
      type:Number,
      default:0
    },
    prosek:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
    ans1:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans2:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans3:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans4:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans5:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans6:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans7:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans8:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans9:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans10:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans11:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans12:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans13:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans14:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans15:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans16:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans17:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans18:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans19:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans20:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans21:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans22:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans23:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans24:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans25:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans26:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans27:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans28:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans29:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans30:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans31:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans32:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans33:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans34:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans35:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans36:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans37:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans38:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans39:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans40:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans41:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans42:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans43:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans44:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans45:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans46:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans47:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans48:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans49:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans50:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans51:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans52:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans53:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans54:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans55:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans56:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans57:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans58:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans59:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans60:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans61:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans62:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans63:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans64:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans65:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans66:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans67:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans68:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans69:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans70:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans71:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans72:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans73:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans74:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans75:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans76:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans77:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans78:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans79:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans80:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans81:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans82:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans83:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans84:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans85:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans86:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans87:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans88:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans89:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans90:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans91:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
ans92:{
 podredjeni:{
   type:Number,
   default:0
 },
 nadredjeni:{
   type:Number,
   default:0
 },
 ukupno:{
   type:Number,
   default:0
 }
},
  },
  type:{
    type: String,
    required:true
  }
});

module.exports = User = mongoose.model('users',UserSchema);
