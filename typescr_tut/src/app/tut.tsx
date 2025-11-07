
function page() {

  const naam:Person={
    name:"aashik",
    age:20,
    email:"XXXXXXXXXXXXXXXX"
  };
  const status1:status=200;
  const status2:stauts="error"


  return (

    <div>

      Hello welcome to {naam.name}
      <h1>
        Your status is {status1}
      </h1>
      <h2>
        Your status might be {status2}
      </h2>
    </div>
  )
}

export default page