const type=document.getElementById('cotizar-seguro')

type.addEventListener('submit',getDataFromUI)

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
    //Validation for the fields of the form
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
