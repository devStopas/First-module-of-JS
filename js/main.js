var person = {
    name: 'Thelma',
    birthDate: '1996-14-11',
    height: {
      unit: 'cm',
      value: '170'
    },
    weight: {
      unit: 'kg',
      value: '70'
    },
    curp: '',
    get getHeight() {
      return `${this.height.value} ${this.height.unit}`
    },
    set setCURP(curp) {
      this.curp = curp.toUpperCase()
    }
  }
  person.getHeight
  person.setCURP = 'hsdahjkdsfhjkds'

//Mi codigo no funcioal

var Phone = {
    brand : 'Samsung',
    model : 'S9',
    color : 'Res',
    price : '$20,000',
    memoryRam: '16 Gb',
    memoryRom: '32 Gb',
    camera: '56 mpx',
    processor: '350MHz',
    ziseScreen: '900px',
    batery: {
        mAh: 4000,

    }
}

//Funcon Constructora  //capitalize

// Constructor function
function Dog(breed, name, size) {
    this.breed = breed
    this.name = name
    this.size = size
   }
   var firstDog = new Dog('Dash hound', 'Sr. Salchicha', 'S')

function beer( )