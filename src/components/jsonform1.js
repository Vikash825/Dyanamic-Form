import React from 'react'

const data1 = {
    "fields": [
      {
        "label": "Date of Birth (YYYY-MM-DD)",
        "key": "birthday",
        "isRequired": true,
        "order": 1,
        "isReadonly": false,
        "type": "date"
      },
      {
        "label": "Sex",
        "items": [
          {
            "value": "male",
            "text": "Male"
          },
          {
            "value": "female",
            "text": "Female"
          }
        ],
        "key": "sex",
        "isRequired": true,
        "order": 2,
        "isReadonly": false,
        "type": "dropdown"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 3,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Gestational Age",
        "key": "gestationalAge",
        "isRequired": true,
        "order": 3,
        "unit": "weeks",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Height",
        "key": "height",
        "isRequired": true,
        "order": 4,
        "unit": "cm",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "Weight",
        "key": "weight",
        "isRequired": true,
        "order": 5,
        "unit": "kg",
        "isReadonly": false,
        "type": "number"
      },
      {
        "label": "BMI",
        "key": "bmi",
        "order": 6,
        "unit": "kg/m²",
        "isReadonly": true,
        "type": "number"
      }
      
    ]
  }

function JSONFORM1() {
  const onSubmit= (e) => {
  e.preventDefault()
  }
  return (
    <div className='container'>
      
      <form className='form-outer' onSubmit={onSubmit}>
      <h1>Basic Details</h1>
       {
        data1.fields.map(formData => {
          console.log("formData",formData)
          return(
            <div>
              <label>{formData.label}</label>
              <input type={formData.type} required={formData.isRequired} order={formData.order} unit={formData.unit} key={formData.key}
                     readonly={formData.isReadonly}
              />
              
            </div>
          )
        })
       }
       <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default JSONFORM1