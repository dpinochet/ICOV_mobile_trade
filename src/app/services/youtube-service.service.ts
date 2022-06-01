import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var gapi;
declare var $;

@Injectable({
  providedIn: 'root'
})
export class YoutubeServiceService {

  OAUTH2_CLIENT_ID = '97244969057-5vgal1prd287aq7v5v1dqnjkaoni1i26.apps.googleusercontent.com';
  OAUTH2_SCOPES = [
      'https://www.googleapis.com/auth/youtube'
    ];

  // playlistId 
  // nextPageToken 
  // prevPageToken;

  constructor(public http: HttpClient) {
    console.log('Hello YoutubeServiceProvider Provider');
  }

  async auth(){
    let data={
      client_id:'97244969057-e20um7a1dkkmlrggmmtjagvom9gr43f8.apps.googleusercontent.com',
      scope:'https://www.googleapis.com/auth/youtube'

    }
    let header = {
      'Content-Type':'application/x-www-form-urlencoded'
    }
    return this.http.post('https://accounts.google.com/o/oauth2/device/code',data).toPromise();
    // await this.token(code_response);
    // //  .then((authResponse)=>{
    // //    this.token(authResponse);
    // //     console.log('authResponse_code:',authResponse);
    // //  });
  }

 async token(authData){


    console.log('code_value: ',authData);
    let auth = authData;
    let data ={
      client_id:'97244969057-e20um7a1dkkmlrggmmtjagvom9gr43f8.apps.googleusercontent.com',
      client_secret:'s4B4hsBD-2xyRn5jVvlCsM3O',
      code:auth.device_code,
      grant_type:'http://oauth.net/grant_type/device/1.0'
    }

    let token_result = await this.http.post('https://accounts.google.com/o/oauth2/token',data).toPromise();
    console.log('token_result: ',token_result);
    // .then((authResponse_token)=>{
    //   this.token(authResponse_token);
    //    console.log('authResponse_token:',authResponse_token);
    // });


  }
  
  // loadYoutube(){
    
  //   gapi.load('client:auth2', this.checkAuth);
  // }


  // auth() {
  

  //   gapi.auth.init(()=> {
  //     window.setTimeout(this.checkAuth, 1);
  //   });
  // }


  // checkAuth() {
  //   gapi.auth.authorize({
  //     client_id: '97244969057-5vgal1prd287aq7v5v1dqnjkaoni1i26.apps.googleusercontent.com',
  //     scope: [
  //       'https://www.googleapis.com/auth/youtube'
  //     ]
  // ,
  //     immediate: true
  //   }).then(authResult=>{
  //     console.log('authResult: ',authResult);
  //   })
  // }


  // handleAuthResult(authResult) {
  //   console.log('authResultGoogle: ',authResult);
  //   if (authResult && !authResult.error) {
  //     // Authorization was successful. Hide authorization prompts and show
  //     // content that should be visible after authorization succeeds.
  //     $('.pre-auth').hide();
  //     $('.post-auth').show();
  //     this.loadAPIClientInterfaces();
  //   } else {
  //     // Make the #login-link clickable. Attempt a non-immediate OAuth 2.0
  //     // client flow. The current function is called when that flow completes.
  //     $('#login-link').click(function() {
  //       gapi.auth.authorize({
  //         client_id: this.OAUTH2_CLIENT_ID,
  //         scope: this.OAUTH2_SCOPES,
  //         immediate: false
  //         }, this.handleAuthResult);
  //     });
  //   }
  // }

  // loadAPIClientInterfaces() {
  //   gapi.client.load('youtube', 'v3', ()=> {
  //     this.handleAPILoaded();
  //   });
  // }

  // handleAPILoaded() {
  //   this.requestUserUploadsPlaylistId();
  // }

  // requestUserUploadsPlaylistId() {
  //   // See https://developers.google.com/youtube/v3/docs/channels/list
  //   var request = gapi.client.youtube.channels.list({
  //     mine: true,
  //     part: 'contentDetails'
  //   });
  //   request.execute((response)=> {
  //     this.playlistId = response.result.items[0].contentDetails.relatedPlaylists.uploads;
  //     // this.requestVideoPlaylist(this.playlistId);
  //   });
  // }

  // requestVideoPlaylist(playlistId, pageToken) {
  //   $('#video-container').html('');
  //   var requestOptions = {
  //     playlistId: playlistId,
  //     part: 'snippet',
  //     maxResults: 10,
  //     pageToken:null
  //   };
  //   if (pageToken) {
  //     requestOptions.pageToken = pageToken;
  //   }
  //   var request = gapi.client.youtube.playlistItems.list(requestOptions);
  //   request.execute(function(response) {
  //     // Only show pagination buttons if there is a pagination token for the
  //     // next or previous page of results.
  //     this.nextPageToken = response.result.nextPageToken;
  //     var nextVis = this.nextPageToken ? 'visible' : 'hidden';
  //     $('#next-button').css('visibility', nextVis);
  //     this.prevPageToken = response.result.prevPageToken
  //     var prevVis = this.prevPageToken ? 'visible' : 'hidden';
  //     $('#prev-button').css('visibility', prevVis);
  
  //     var playlistItems = response.result.items;
  //     if (playlistItems) {
  //       $.each(playlistItems, function(index, item) {
  //         this.displayResult(item.snippet);
  //       });
  //     } else {
  //       $('#video-container').html('Sorry you have no uploaded videos');
  //     }
  //   });
  // }

  // displayResult(videoSnippet) {
  //   var title = videoSnippet.title;
  //   var videoId = videoSnippet.resourceId.videoId;
  //   $('#video-container').append('<p>' + title + ' - ' + videoId + '</p>');
  // }
  
  // // Retrieve the next page of videos in the playlist.
  // // nextPage() {
  // //   this.requestVideoPlaylist(playlistId, nextPageToken);
  // // }
  
  // // // Retrieve the previous page of videos in the playlist.
  // // previousPage() {
  // //   this.requestVideoPlaylist(playlistId, prevPageToken);
  // // }
}
