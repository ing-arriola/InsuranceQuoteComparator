function Insurance(brand,year,type){
    this.brand=brand
    this.year=year
    this.type=type
}
Insurance.prototype.getQuote = function(insurance) {
    const base=2000
    let amount
    switch (this.brand) {
        case '1':
            amount=base*1.15
            break;
        case '2':
            amount=base*1.05
            break
        case '3':
            amount=base*1.35
            break
        default:
            break;
    }
    //This get the difference between the actual year and the year of the car
    const difference=new Date().getFullYear() - this.year
    //Every year we must reduce 3% the value of insurance
    amount = amount*(1 - difference*0.03)
    //basic insurance times 30% and complete times 50%
    if (this.type == 'basico') {
        amount*=1.30
    }else{
        amount*=1.50
    }
    return amount

}

function Interfaz (){}

Interfaz.prototype.showRes = function(insurance,total) {
    const result=document.getElementById('resultado')
    let brand
    switch (insurance.brand) {
        case '1':
            brand='Americano'
            break;
        case '2':
            brand='Asiatico'
            break;
        case '3':
            brand='Europeo'
            break;
    }
    const div=document.createElement('div')
    div.innerHTML=` <p class='header'>Results:</p> 
                    <p>${brand}</p> 
                    <p>Year: ${insurance.year}</p> 
                    <p>Type: ${insurance.type}</p> 
                    <p>Total:${total}</p> `
    //Declare a spinner to make look like the App was getting data from a remote server
    const spinner= document.querySelector('#cargando img')
    spinner.style.display='block'
    //Add time out of 3 second
    setTimeout(() => {
       spinner.style.display='none'
       result.appendChild(div)    
    }, 3000);
    
}

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
        const resu=document.querySelector('#resultado div')
        if (resu != null){
            resu.remove()
        }
        //If no one data is missing then... do the insurance quoute
        const insurance= new Insurance(seletedBrand,yearSelected,type)
        const amount=insurance.getQuote(insurance)
        //After get the insurance quote, we need to show thw data on DOM
        interfaz.showRes(insurance,amount)
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
