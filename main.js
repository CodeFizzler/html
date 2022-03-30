//CREATED BY SIBGAT(ProGamer)
setTimeout(function () {
  document.querySelector("#intro").style.display = "none"
}, 1000)
let tg = 0
let scrr = 0
let jhk
function rply() {
  let cc = can.getContext("2d")
  let imgo = document.createElement("img")
  imgo.src = snapshot.val().image
  cc.drawImage(imgo, 0, 0, window.innerWidth, window.innerHeight)
}
document.querySelector("canvas").style.bottom = -window.innerHeight + "px"
function tgg() {
  if (tg < 1) {
    tg = 1
    document.querySelector("#snd").innerHTML = "<i class='fa fa-paint-brush' aria-hidden='true'></i>"
    document.querySelector(".medialog").style.transform = "rotate(45deg)"
    document.querySelector("canvas").style.bottom = 0
    document.querySelector("textarea").disabled = "disabled"
    setTimeout(
      () => {
        document.querySelector("textarea").disabled = ""
      }
    )
    document.querySelector("#paste").style.display = "block"
  }
  else {
    tg = 0
    document.querySelector("#snd").innerHTML = "<i class='fa fa-paper-plane' aria-hidden='true'></i>"

    document.querySelector(".medialog").style.transform = "rotate(0deg)"
    document.querySelector("canvas").style.bottom = -window.innerHeight + "px"
    document.querySelector("#paste").style.display = "none"
  }
}
can = document.querySelector("canvas")
c = can.getContext("2d")
let b = setInterval(() => {
  document.querySelector("canvas").width = window.innerWidth
  document.querySelector("canvas").height = window.innerHeight
})
setTimeout(() => {
  clearInterval(b)
}, 1000)
function jt(event) {
  let size = document.querySelector("#si").value
  let o = event.touches[0].clientX
  let w = event.touches[0].clientY
  let colour = document.querySelector("#palet").value
  if (size > 40) {
    c.beginPath()
    c.moveTo(o, w)
    c.beginPath()
    c.lineWidth = 1
    c.lineTo(o, w)
    c.stroke()
  }
  if (colour == "Circle") {
  }
  else {
    c.beginPath()
    c.moveTo(o, w)
    c.beginPath()
    c.lineTo(o, w)
    c.strokeStyle = colour
    c.shadowColor = colour
    c.lineWidth = 1
    c.shadowBlur = size
    c.stroke()
  }
  document.querySelector("canvas").ontouchmove = function (event) {
    let X = event.touches[0].clientX
    let Y = event.touches[0].clientY
    if (colour == "Eraser") {
      c.clearRect(X, Y, 50, 50)
    }
    if (colour == "Circle") {
      c.beginPath()
      c.arc(o, w, 40, 0, Math.PI * 2)
      c.strokeStyle = colour
      c.stroke()
    }
    else {
      if (size > 40) {
        c.lineTo(X, Y)
        c.lineJoin = "round";
        c.lineCap = "round"
        c.strokeStyle = colour
        c.shadowColor = colour
        c.lineWidth = 1
        c.shadowBlur = size
        c.stroke()
      }
      else {
        c.lineTo(X, Y)
        c.lineJoin = "round";
        c.lineCap = "round"
        c.lineWidth = size
        c.strokeStyle = colour
        c.shadowColor = colour
        c.shadowBlur = size - 3
        c.stroke()
      }
    }
    document.querySelector("#clr").onclick = function () {
      c.clearRect(0, 0, can.width, can.height)
      navigator.vibrate(100)
    }
  }
}
setInterval(
  () => {

    if (!window.navigator.onLine) {
      document.querySelector("h1").innerHTML = "No internet \nReload"
    }
    else {

      document.querySelector("h1").innerHTML = ""
    }
    
  }
)

let yyy = 0
let chtt;
let stin = setInterval(scr, 0)

function scr() {
  document.querySelector("#ll").style.display = "none"
  chtt = document.querySelector("#chatscrn")
  yyy += 10000
  chtt.scrollTo(0, yyy)
  chtt.ontouchmove = () => {
    clearInterval(stin)
    document.querySelector("#ll").style.display = "block"
  }
}

function tog() {
  let al = document.querySelectorAll("pre")
  for (i = 0; i < al.length; i++) {
    al[al.length - 1].style.transform = "scale(1.2,1.2)"
    setTimeout(
      () => {
        al[al.length - 1].style.transform = "scale(1,1)"

      }, 300
    )
  }
}
scr()

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let sscr = 0
let bglist = ["#FF4E50", "#0269A4", "#00B4AB", "#FFD832", "#12A4D9", "#F34F1C", "#7FBC00", "#747474", "#594F4F", "#ff7817", "#6a00ff", "#009dff"]
let r = bglist[Math.ceil(Math.random() * bglist.length - 1)]
let nme;
let key, content
function ready() {
  nme = document.querySelector("#name").value
  content = document.getElementById("contentfield").value
}
function sm() {
  ready()
  firebase.database().ref('User/Test').on('value', function (snapshot) {
    let dt = document.createElement("div")
    let d = dt.style
    d.width = "200px"
    d.height = "200px"
    d.backgroundSize = "cover"
    d.background = snapshot.val().profile
    d.padding = "5px"
  }
  )
}
get()
function zoom(src) {
  let vvv = 0
  document.querySelector("#imagezoom").src = src
  document.querySelector("#zoom").style.left = "0px"
  document.querySelector("#zoom").ontouchend = () => {
    document.querySelector("#zoom").style.left = "-100%"
  }
  /*
  document.querySelector("#cont").style.left="0px"
  document.querySelector("#cont").ondblclick=()=>{
  document.querySelector("#cont").style.left="-100%"
  }
  */
  let cont = document.querySelector("#cont")
  cont.ontouchmove = (event) => {
    let x = event.touches[0].clientX - window.innerWidth / 2
    let y = event.touches[0].clientY - window.innerHeight / 2
    vvv += .1
    if (event.touches.length > 1) {
      cont.style.transform = "translateX(" + x + "px) translateY(" + y + "px)"
      //document.querySelector("span").style.transform="scale("+v*0.1+","+v*0.1+")"
    }
  }
  cont.ontouchend = () => {
    vvv = 0
    cont.style.transform = "translateX(" + 0 + "px) translateY(" + 0 + "px)"
    cont.style.transform = "scale(" + 1 + "," + 1 + ")"
  }
}
let mlap = 0
let linkf
let rr = r
let nmee, cl, cn, prc

function get() {
  ready()
  firebase.database().ref('User/Test').on('value', function (snapshot) {
    let c = document.createElement("pre")
    c.setAttribute("ng-app", "")
    let dp = document.createElement("div")
    let re = document.createElement("div")
    let medi = document.createElement("img")
    medi.style.objectFit = "contain"
    let txtele = document.createElement("font")
    re.setAttribute("id", "repl")
    c.setAttribute("id", "dp")
    medi.setAttribute("id", "medi")
    document.getElementById("chatscrn").appendChild(c)
    document.getElementById("chatscrn").appendChild(dp)

    let st = c.style
    let dps = dp.style
    dp.setAttribute("id", "imgme")
    dps.width = "50px"
    dps.height = "50px"
    dps.backgroundSize = "cover"
    dps.background = snapshot.val().profile
    dps.backgroundSize = "cover"
    dps.marginTop = "-60px"
    st.padding = "5px"
    st.width = window.innerWidth - 100 + "px"
    st.borderLeft = "10px solid gold"
    st.marginLeft = "60px"
    let brcl = snapshot.val().profile
    st.borderColor = brcl
    document.querySelector("p").innerHTML = "Atspire"
    document.querySelector("#audioa").play()

    let urlified;
    let text = snapshot.val().content

    const urlify = (text) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, (url) => {
        return "<a href=" + url + ">" + url + "</a>";
      })
    }
    text = urlify(text);

    c.innerHTML = "<font style='font-weight:bold;color:" + snapshot.val().profile + ";'>" + snapshot.val().name + "</font>\n\n"

    c.appendChild(txtele)
    txtele.innerHTML = text

    re.innerHTML = "<i class='fas fa-copy'></i>"
    c.appendChild(re)
    re.onclick = function () {
      let vrt = document.createElement("input")
      var copyText = snapshot.val().content;
      vrt.value = copyText
      /*
     copyText.select();
       copyText.setSelectionRange(0, 99999);
       */
      navigator.clipboard.writeText(vrt.value);
    }
  }
  )
  firebase.database().ref('User/Img').on('value', function (snapshot) {
    ready()
    let c = document.createElement("pre")
    let dp = document.createElement("div")
    let re = document.createElement("div")
    let medi = document.createElement("img")
    medi.style.objectFit = "contain"
    let txtele = document.createElement("font")
    re.setAttribute("id", "repl")
    c.setAttribute("id", "dp")
    medi.setAttribute("id", "medi")
    document.getElementById("chatscrn").appendChild(c)
    document.getElementById("chatscrn").appendChild(dp)
    cn = snapshot.val().caption
    let st = c.style
    let dps = dp.style
    prc = snapshot.val().profile
    nmee = snapshot.val().name
    dp.setAttribute("id", "imgme")
    dps.width = "50px"
    dps.height = "50px"
    dps.backgroundSize = "cover"
    dps.background = prc
    dps.backgroundSize = "cover"
    dps.marginTop = "-60px"
    st.padding = "5px"
    st.width = window.innerWidth - 100 + "px"
    st.borderLeft = "10px solid gold"
    st.marginLeft = "60px"
    let brcl = prc
    st.borderColor = brcl
    document.querySelector("#audioa").play()
    let urlified;
    let text = cn

    const urlify = (text) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, (url) => {
        return "<a href=" + url + ">" + url + "</a>";
      })
    }
    urlified = urlify(text);

    c.innerHTML = "<font style='font-weight:bold;color:" + prc + ";'>" + nmee + "</font>\n\n"
    linkf = snapshot.val().image
    medi.src = linkf
    medi.onclick = function () {
      zoom(linkf)
    }
    c.appendChild(medi)
    c.appendChild(txtele)
    txtele.innerHTML = urlified
    re.innerHTML = "<i class='fa fa-reply' aria-hidden='true'></i>"
    c.appendChild(re)
    re.onclick = function () {
      tgg()
      let cc = can.getContext("2d")
      let imgo = document.createElement("img")
      imgo.src = snapshot.val().image
      cc.drawImage(imgo, 0, 0, window.innerWidth, window.innerHeight)
    }
  })
  firebase.database().ref('User/image').on('value', function (snapshot) {
    ready()
    let c = document.createElement("pre")
    let dp = document.createElement("div")
    let re = document.createElement("div")
    let medi = document.createElement("img")
    medi.style.objectFit = "cover"
    let txtele = document.createElement("font")
    re.setAttribute("id", "repl")
    c.setAttribute("id", "dp")
    medi.setAttribute("id", "medi")
    document.getElementById("chatscrn").appendChild(c)
    document.getElementById("chatscrn").appendChild(dp)
    cn = snapshot.val().caption
    let st = c.style
    let dps = dp.style
    prc = snapshot.val().profile
    nmee = snapshot.val().name
    dp.setAttribute("id", "imgme")
    dps.width = "50px"
    dps.height = "50px"
    dps.backgroundSize = "cover"
    dps.background = prc
    dps.backgroundSize = "cover"
    dps.marginTop = "-60px"
    st.padding = "5px"
    st.width = window.innerWidth - 100 + "px"
    st.borderLeft = "10px solid gold"
    st.marginLeft = "60px"
    let brcl = prc
    st.borderColor = brcl
    document.querySelector("#audioa").play()
    let urlified;
    let text = cn

    const urlify = (text) => {
      const urlRegex = /(https?:\/\/[^\s]+)/g;
      return text.replace(urlRegex, (url) => {
        return "<a href=" + url + ">" + url + "</a>";
      })
    }
    urlified = urlify(text);

    c.innerHTML = "<font style='font-weight:bold;color:" + prc + ";'>" + nmee + "</font>\n\n"
    linkf = snapshot.val().image
    medi.src = linkf
    medi.onclick = function (e) {
      zoom(linkf)
    }
    c.appendChild(medi)
    c.appendChild(txtele)
    txtele.innerHTML = urlified
    re.innerHTML = "<i class='fa fa-reply' aria-hidden='true'></i>"
    c.appendChild(re)
    re.onclick = function () {
      tgg()
      let cc = can.getContext("2d")
      let imgo = document.createElement("img")
      imgo.src = snapshot.val().image
      cc.drawImage(imgo, 0, 0, window.innerWidth, window.innerHeight)
    }
  })
}
function pr(event) {
  event.preventDefault()
  event.stopPropagation()
}
let kiol;
function update() {
  ready()
  /*
    $.getJSON("https://api.ipify.org?format=json", function (data) {
      kiol = data.ip
    })
    */
  if (nme.match(/atspire|sibgat|sameervegas|progamer/gi)) {
    alert("Sorry!\nBut You Can't Use This Username")
    document.querySelector("#snd").disabled = "disabled"
    document.querySelector("#snd").style.background = "#ff441a"
  }
  else {
    document.querySelector("#snd").disabled = ""
    document.querySelector("#snd").style.background = ""
    if (tg > 0) {
      firebase.database().ref('User/Img').update({
        image: document.querySelector('canvas').toDataURL(),
        caption: content,
        profile: rr,
        name: document.querySelector("#name").value,
      }
      )
    }
    else {
      firebase.database().ref('User/Test').update({
        content: document.getElementById("contentfield").value,
        name: document.querySelector("#name").value,
        profile: rr,
        mlap: 0
      }
      )

    }
  }
  /*
    let dur=10
  let durr=setInterval(
  ()=>{
  dur-=1
  document.querySelector("#snd").disabled="disabled"
  document.querySelector("#snd").innerHTML=dur
  if(dur<0){
  clearInterval(durr)
  document.querySelector("#snd").disabled=""
  document.querySelector("#snd").innerHTML='<i class="fa fa-paper-plane" aria-hidden="true"</i>'
  }
  },1000
  )
  */
  if (nme == "ProGamer") {
    document.querySelector("#imgme").style.boxShadow = "0px 0px 20px " + r
  }
  document.querySelector("#name").style.opacity = 0
  document.querySelector("#name").disabled = "disabled"
  document.querySelector("textarea").value = ""
  c.clearRect(0, 0, can.width, can.height)
}
function typee() {
  firebase.database().ref('User/Status').set({
    status: 1,
    name: document.querySelector("#name").value
  }
  )
  setTimeout(() => {
    firebase.database().ref('User/Status').update({
      status: 0,
      name: document.querySelector("#name").value
    })
  }, 500)
  firebase.database().ref('User/Status').on('value', function (snapshot) {
    if (snapshot.val().status > 0) {
      document.querySelector("#audiob").play()
      document.querySelector("#status").style.opacity = 1
      document.querySelector("#status").innerHTML = snapshot.val().name + " Typing...."
    }
    else {
      document.querySelector("#status").style.opacity = 0
    }
  })
}


function onrec() {
  firebase.database().ref('User/Status').update({
    received: 1,
    name: document.querySelector("#name").value
  }
  )
  setTimeout(() => {
    firebase.database().ref('User/Status').update({
      received: 0,
      name: document.querySelector("#name").value
    })
  }, 500)
  firebase.database().ref('User/Status').on('value', function (snapshot) {
    if (snapshot.val().received > 0) {
      document.querySelector("#audiob").play()
      document.querySelector("#status").style.opacity = 1
      document.querySelector("#status").innerHTML = snapshot.val().name + " send a message."
    }
    else {
      document.querySelector("#status").style.opacity = 0
    }
  })


}

function onmed() {
  firebase.database().ref('User/Status').update({
    received: 1,
    name: document.querySelector("#name").value
  }
  )
  setTimeout(() => {
    firebase.database().ref('User/Status').update({
      received: 0,
      name: document.querySelector("#name").value
    })
  }, 500)
  firebase.database().ref('User/Status').on('value', function (snapshot) {
    if (snapshot.val().received > 0) {
      document.querySelector("#audiob").play()
      document.querySelector("#status").style.opacity = 1
      document.querySelector("#status").innerHTML = snapshot.val().name + " send a image."
    }
    else {
      document.querySelector("#status").style.opacity = 0
    }
  })


}



let reader, files = []
document.getElementById("imgslct").onclick = function (e) {
  let input = document.createElement("input")
  input.type = 'file'
  input.accept = "image/*"
  input.onchange = e => {
    document.getElementById("imgviewer").style.display = "block"
    files = e.target.files
    reader = new FileReader()
    reader.onload = function () {
      document.querySelector("#imgupload").src = reader.result
    }
    reader.readAsDataURL(files[0])
  }
  input.click()
}

document.getElementById("upl").onclick = function () {
  let uploadTask = firebase.storage().ref("User/image").put(files[0])
  uploadTask.on("state_changed", function (snapshot) {
    let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    document.querySelector(".lba").innerHTML = Math.ceil(progress) + "%"
    document.getElementById("chb").style.width = (250 * progress / 100) + "px"
    if (progress > 99) {
      sending()
      onmed()
      setTimeout(
        () => {
          document.getElementById("imgviewer").style.display = "none"
          document.querySelector(".lba").innerHTML = 0 + "%"
          document.getElementById("chb").style.width = (250 * progress / 100) + "px"
        }, 2000
      )
    }
  })

}
function sending() {
  let storage = firebase.storage();
  storage.ref("User/image").getDownloadURL().then((url) => {
    firebase.database().ref("User/image").set({
      image: url,
      name: document.querySelector("#name").value,
      caption: document.getElementById("contentfield").value,
      profile: rr,
    }
    )
  }
  )
}
setInterval(() => {
  let all = document.querySelectorAll("img")
  for (i = 0; i < all.length; i++) {
    all[i].onclick = function () {
      zoom(this.src)
    }
  }
})

/*
  firebase.database().ref('User/UserCredentials/Test').set({
    Username:"sameer",
    Password:"1234",
    Profile:"",
    About:"",
    Status:"",
    Color:"",
    Country:"",
    Gender:"",
    Theme:"",
    ImpulsePack:{
      Subscribed:false,
      StartDate:"",
      EndDate:"",
    },
    Activity:{
      Count:100,
      List:["a","b","c"]

    },
    Post:{
      Count:100,
      List:["a","b","c"]
    },
    Chatrooms:{
      ChatId:{
      Count:100,
      List:["a","b","c"]
      }
    },
    Friends:{
      Count:100,
      List:["a","b","c"]

    },
    Followers:{
      Count:100,
      List:["a","b","c"]
    },
    Following:{
      Count:100,
      List:["a","b","c"]
      },
    })

    firebase.database().ref('User/UserCredentials/Test/Following').on('value', function (snapshot) {
      let list=snapshot.val().List
      for(i=0;i<list.length;i++){
      alert(list[i])
      }
    })

    firebase.database().ref("User/UserCredentials/"+username).once("value",snapshot => {
    if (snapshot.exists()){
    }
    )}

setInterval(
  () => {

    if (!window.navigator.onLine) {
      firebase.database().ref('User/UserCredentials/Test').update({
        Status:"Online",
      })
    }
    else {
      firebase.database().ref('User/UserCredentials/Test').update({
        Status:"Offline",
      })

    }
    
  }
)
*/