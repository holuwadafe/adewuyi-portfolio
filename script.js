function displayGreeting() {
    let currentTime = new Date().getHours();
    let greetingMessage;

    if (currentTime >= 6 && currentTime < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentTime >= 12 && currentTime < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    document.getElementById("greetings").innerText = greetingMessage;
    document.getElementById("greetings").style = "color: pink; font-size: 30px; padding: 10px"
}

displayGreeting();

const head = document.getElementById("head")
const tdata = document.getElementById("t-data")

fetch("data/user.json").then((response, index, array)=>{
    // console.log(response)
    if (response.ok === true){
        return response.json()
    } else {
        throw new Error(`error: ${response.status}`)
    }
}).then((data)=>{
    
    const headerColumn = Object.keys(data.users[0])
    const headerHtml = `<tr>
    ${headerColumn.map((res)=>`<th>${res}</th>`).join('')}
    </tr>`
    
    head.innerHTML = headerHtml

    const tableData = data.users.map((user)=>{
        return `<tr>
        ${headerColumn.map((res)=>`<td>${user[res]}</td>`).join('')}
        </tr>`
    }).join('')
    tdata.innerHTML = tableData
})
.catch((error)=>{
    console.log(`error:${error}`)
})



