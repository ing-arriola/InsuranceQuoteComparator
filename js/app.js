function insurance(brand,year,type){
    this.brand=brand
    this.year=year
    this.type=type
}

function Interfaz (){}

Interfaz.prototype.showMsg = function(msg,type) {
    //Creating a div to insert into the DOM.... before the form
    const msgShowed=document.createElement('div')
    //If the type of msg is error, set the classes to the element to msg,error
    //Else the classes will be msg,correcto. This will give style to the elemet
    //according to the type of information received
    if(type==='error'){
        msgShowed.classList.add('message','error')
    }else{
        msgShowed.classList.add('message','correcto')
    }
    //Insert the msg to the HTML
    msgShowed.innerHTML=`${msg}`
    //Insert before the fist element of the form
    SelectType.insertBefore(msgShowed,document.querySelector('.form-group'))
    //After some time... remove the msg
    setTimeout(function(){
        document.querySelector('.message').remove()
    },2000)
}

const SelectType=document.getElementById('cotizar-seguro')


SelectType.addEventListener('submit',getDataFromUI)

//This function get the selected parameters for the insurance quote from the UI
function getDataFromUI(e){
    //Prevent the default behaviour of sending data in a form
    e.preventDefault()
    //Select the 'select' element in the DOM for type
    const brand=document.getElementById('marca')
    //Get the selected index in a selected HTML item
    const seletedBrand=brand.options[brand.selectedIndex].value
    //Select the 'select' element in the DOM for years
    const yearsFromUI=document.getElementById('anio')
    const yearSelected=yearsFromUI.options[yearsFromUI.selectedIndex].value
    //Get the selected value from a radioButton
    const type=document.querySelector('input[name="tipo"]:checked').value
    //Instance of the interfaz
    const interfaz=new Interfaz()
    //Validation for the fields of the form
    if( seletedBrand ==='' || yearSelected === '' || type === ''){
        interfaz.showMsg('Some data is missing, complete and try again','error')
    }else{
        console.log('Todo bien, todo correcto')
    }
}

    //Get the actual date
    const maxDate=new Date().getFullYear()
    const years=document.getElementById('anio')
    for (let index = maxDate; index >= maxDate-20; index--){
        let option=document.createElement('option')
        option.value=index
        option.innerHTML=index
        years.appendChild(option)
    }
