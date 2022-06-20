const inappwebview={
    events:{
        readyToPlay: (data)=>{
            window.flutter_inappwebview.callHandler('readyToPlay',   data );
        },
        errorState: (data)=>{
            window.flutter_inappwebview.callHandler('errorState',   data );
        },
        buffering: (data)=>{
            window.flutter_inappwebview.callHandler('buffering',   data );
        },
        volumeChange: (data)=>{
          window.flutter_inappwebview.callHandler('volumeChange',   data );
        },
        progress: (data)=>{
          window.flutter_inappwebview.callHandler('progress',   data );
        }
        playerLoaded: (data)=>{
          window.flutter_inappwebview.callHandler('playerLoaded',   data );
        }
    }
}


