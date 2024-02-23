
export default function Rule({allOperators, json, setJson, handleChange, index, deleteRule}){
    // console.log('allOperators ',allOperators);
    return (
        <div className="rule-cmp-outer-div">
            <form>
                {/* <label for="rules">Rules: </label>
                <input type="text" name="rules" placeholder="rules"/><br/> */}
                <select name="operand" onChange={(e)=>handleChange(e, index)}>
                    <option>First Name</option>
                    <option>Last Name</option>
                    <option>Age</option>
                    <option>Is Musician?</option>
                    <option>Also Plays</option>
                    <option>Gender</option>
                    <option>Height</option>
                </select> &nbsp;
                <select name="operator" onChange={(e)=>handleChange(e, index)}>
                    {
                    allOperators.map((ope, i)=> {
                        return <option key={i}>{ope}</option>
                    })
                    }
                </select> &nbsp;
                <input type="text" name="value" placeholder="value" onChange={(e)=>handleChange(e, index)}/>
            </form> &nbsp; &nbsp; &nbsp; &nbsp;
            <div className="cross-div" onClick={(e)=>deleteRule(e, index)}>
                <img className="cross-img" src="https://cdn-icons-png.flaticon.com/128/2976/2976286.png" alt="delete"/>
            </div>
        </div>
    )
}