 let i=1; //Increase the number when entering credit i.e. 1) 2) ..... n)
  let credit_and_point=0  // 'and' refers to multiply
  let copy_credit=0
  let c_gpa=0
// This input showing the total no of course entering the user

  let html1=
        ` 
          <input class='js-course course-css' type='text' onkeydown='pe_courses(event)' placeholder='Enter No Of Courses'>
          <button class='submit' onclick='add()'>Submit</button>
        
        `

  document.querySelector('.js-no-course').innerHTML=html1


  function add()
  { 
    //This function does check the user input of total no of courses and jumped into inputs() function.

      let courses = document.querySelector('.js-course')
      let course_input=parseInt(Number(courses.value))
      console.log(course_input)
      if (isNaN(course_input)) //if enter any characters a-z its go inside in if cond.
        {
          document.querySelector('.js-error').innerHTML='Enter An Integer'
          courses.value=''
          return
        }
      else if (course_input>0)
        {
          document.querySelector('.js-error').innerHTML=''

          html1=course_input
          
          document.querySelector('.js-no-course').innerHTML=`Total No of Courses: ${html1}` //if the course_input greater than 0 its the input tag changes into the text
         
          inputs(course_input)//And jumped into the inputs() function to entering credits
        }
      else
        {
          return
        }
  }

  function inputs(course_input)
  {
    // This function does entering credits of the user

    if (course_input !== 0)
      {

        let  html=
          `<div class='credit-points'>
          <input class='js-credit credit-css' type='text' placeholder='Enter Credit' onkeydown='pe_credits(event,${course_input})'>
          
          <input class='js-points point-css' type='text' placeholder='Enter Grade Point' onkeydown='pe_credits(event,${course_input})'>

          <button class='add' onclick='calculations(${course_input})'>add</button>
          </div>`
         
         
          document.querySelector('.js-c_p_input').innerHTML=`${html}`
           i+=1
          
      }
    else
      {
          document.querySelector('.js-error').innerHTML=''
          document.querySelector('.js-c_p_input').innerHTML='<h1>Completed</h1>'
          document.querySelector(".js-c_gpa").innerHTML=`Your CGPA is: ${c_gpa}`
          i=1
      }
  }


  function calculations(credit_calc)
  {
     // This function does calculation of the credits

      if (credit_calc===0)
        {
          return
        }
      else
        {
          let credit=document.querySelector('.js-credit')
          let point=document.querySelector('.js-points')
          let credit_value=(credit.value).toString()
          let point_value=(point.value).toString()
          console.log(credit_calc)
          if (!Number(credit_value) && !Number(point_value))
            {
               
                document.querySelector('.js-error').innerHTML='Enter Valid Input'
                //credit.value=''
              //  point.value=''
            }
          else if (!Number(credit_value))
            {
              if (credit_value === '')
              {
               document.querySelector('.js-error').innerHTML='Enter Credit'
              }
              else
              {
                document.querySelector('.js-error').innerHTML='Enter Valid Credit'
              }
              
            }

          else if (!Number(point_value))
            {
              if(point_value === '0')
              {
                c_gpa_calculation(Number(credit_value),Number(point_value)) 
                credit.value=''
                point.value=''
                inputs(credit_calc-1)
              }
              else if(point_value === '')
              {
              document.querySelector('.js-error').innerHTML='Enter Grade Point'
              }
        
              else
              {
              document.querySelector('.js-error').innerHTML='Enter Valid Grade Point'
              }
            }

          else
            { 
               document.querySelector('.js-error').innerHTML=''
                c_gpa_calculation(Number(credit_value),Number(point_value)) 
                credit.value=''
                point.value=''
                // c_gpa_calculation(credit_value,point_value)
                inputs(credit_calc-1)
            }
        }
  }

function c_gpa_calculation(credit_value,point_value)
{
   credit_and_point+=credit_value*point_value
   copy_credit+=credit_value
   c_gpa=((credit_and_point/copy_credit).toFixed(3))
   console.log(c_gpa)

   document.querySelector(".js-c_gpa").innerHTML=`Your GPA is: ${c_gpa} Still have ${html1-=1} courses`
   

}
function pe_courses(event) // "pe" refers to press enter
  {
    if (event.key === 'Enter')
      {
        add()
      }
  }
function pe_credits(event,course_input)
{
  if (event.key === 'Enter')
    {
      calculations(course_input)
    }
}
