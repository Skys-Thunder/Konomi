chrome.action.setBadgeText({text:'GET'});
function notif(){
    return fetch("https://service.lsapp.space/notification/unreadcount").then(n=>n.json())
    .then(re=>{
        dt=Object.keys(re.unread.spaceCount).map(n=>Object.values(re.unread.spaceCount[n].chat)),ans=0;
        for(let i=0;i<dt.length;i++){
            for(let j=0;j<dt[i].length;j++){
                ans+=dt[i][j];
            }
        }
        return ans;
    });
}
setInterval(()=>{
    notif().then(n=>chrome.action.setBadgeText({text:String(n)}));
},10000);
chrome.runtime.onMessage.addListener((req,sender,send)=>{
    if(req.type=="notif"){
        notif().then(n=>send({message:n}));
        return true;
    }
});