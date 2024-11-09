chrome.runtime.sendMessage({type:"notif",message:"request"},(res)=>{
    document.getElementById("notif").innerText=`あなたの通知数:${res.message}`;
});
