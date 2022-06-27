


const NestedData=(props)=>{
    console.log(props);
    const val =props.nestData;
   // let userPosts=props.nestData
    //const userPostsData = userPosts.filter((e) => e.userId === props.nestData);
    //console.log(userPostsData.length);
    return (<div>
        
                    <div className="nestedTable1">
                    <label>{val.id}</label>
                    <label>{val.userId}</label>
                    <label>{val.title}</label>
                    <label>{val.body}</label>
                    </div>
                
                )
           
            
            {/* <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Date of Birth</th>
                <th colSpan={2}>Country</th>
                
            </tr>
            </thead>
           
            {userPostsData.map((val,key)=>{
                return(
                    <tr key={key}>
                    <td>{val.id}</td>
                    <td>{val.userId}</td>
                    <td>{val.title}</td>
                    <td colSpan={2}>{val.body}</td>
                    
                </tr>
                )
            })} */}
           
        
    </div>);
}
export default NestedData;