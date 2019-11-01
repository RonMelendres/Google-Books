import React from "react"

function Form() {
    return (
        <form>
            <div className="form-group">
                <label for="formGroupExampleInput">Book Search</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Type in a Book"></input>
            </div>
        </form>
    )
}

export default Form