

function IsAuth({children}) {
    const isLogin = localStorage.getItem("islogin");
    console.log(isLogin);


  return (

    <>

    {isLogin ==="true" && (<div>{children}</div>)}
    {isLogin ==="false" && (<div>login required </div>)}

    
    
    </>
    ) 
}

export default IsAuth