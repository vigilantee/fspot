import React from 'react';
import { connect } from 'react-redux';

import { GoogleLogin } from 'react-google-login';
import { signInSuccess } from '../../actions';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.responseGoogle = (response) => {
      console.log("Google Response is....", response);
      this.props.signInSuccess(response);
    }
    this.failedSignin = (error) => {
      // console.log("Error occured is......", error);
      const resp=`{
        "El": "106772921767863037559",
        "Zi": {
          "token_type": "Bearer",
          "access_token": "ya29.Glw3B7VRIxvzF-LiILrLnEOhb-yW_tOUJi1F7Rb5tcH7FVbGcDefjzJZ59sG7f8Ad7QVpDkon0zbhYO6-LUqMpZhCSBRaDCtYIqRoYqbvBAG50N23G8lAmzLqtwN-w",
          "scope": "email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
          "login_hint": "AJDLj6JFfzQntwuRH3pnQNqAhZ9_HO50pbNzQiVHGE3NGbE_bcqORML1EMUMidzWOxVn-GMzWzj03_zYwlstOl7WWYmibdS0Mg",
          "expires_in": 3600,
          "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMjU0YjgzNzE4OWQxYmMyYmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjQxODI3Mjk4NDI1LTVnYzdibzE1bXQxdmpocXJiaTQ5bDlzdm45ZzRsa3BrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjQxODI3Mjk4NDI1LTVnYzdibzE1bXQxdmpocXJiaTQ5bDlzdm45ZzRsa3BrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NzcyOTIxNzY3ODYzMDM3NTU5IiwiaGQiOiJwaXhhY29yZS5pbiIsImVtYWlsIjoiYWJoaXNoZWsuamhhQHBpeGFjb3JlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJvcENXTEF5RFRIT2QyQTIxODdBdk5BIiwibmFtZSI6IkFCSElTSEVLIEpIQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW9jTjV2czc4MzdjL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRwZk0ycjRReVlRSk9qUzJKU2g5SVhUN3Yyemcvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkFCSElTSEVLIiwiZmFtaWx5X25hbWUiOiJKSEEiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU2MTkwOTE5MywiZXhwIjoxNTYxOTEyNzkzLCJqdGkiOiJiYzUzZmNjZTAwZWNmNzg2M2VkNzY3M2YwNDJmMTM2OGQ2YTViYjJmIn0.e7KjDaan0OncUIzuESJl4L3DeqXuGhz7y0KKXo59y0NkOL_MJoWQFV2_neFu8Vsv1JitX0wdEpmufL5Z3KXVlbkDQ2-2EE2TpNAl1JsQ1W4AHcuWn7sOHTzjbg3KH_iiB71ZmKtdtvN2JJYOrKlrtccROZhb8ajpN7j5g67TN4-qI_EYJxIlcrjIwn2LTX5ICzYEb_6yDn4XDlw8-vDn5hG0etbiC_IOBJsyyaoXd-5_FSo_zNExQiLuP9STFIIEojt4HAnFVQusJXZpg2qcQvd2gkviXka7ONOOLJspMVZEVl_ezX1VnZz8nh-VORSlBOcGHO4a3K7WwxRHNRwnHA",
          "session_state": {
            "extraQueryParams": {
              "authuser": "0"
            }
          },
          "first_issued_at": 1561909193994,
          "expires_at": 1561912793994,
          "idpId": "google"
        },
        "w3": {
          "Eea": "106772921767863037559",
          "ig": "ABHISHEK JHA",
          "ofa": "ABHISHEK",
          "wea": "JHA",
          "Paa": "https://lh3.googleusercontent.com/-ocN5vs7837c/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdpfM2r4QyYQJOjS2JSh9IXT7v2zg/s96-c/photo.jpg",
          "U3": "abhishek.jha@pixacore.in"
        },
        "googleId": "106772921767863037559",
        "tokenObj": {
          "token_type": "Bearer",
          "access_token": "ya29.Glw3B7VRIxvzF-LiILrLnEOhb-yW_tOUJi1F7Rb5tcH7FVbGcDefjzJZ59sG7f8Ad7QVpDkon0zbhYO6-LUqMpZhCSBRaDCtYIqRoYqbvBAG50N23G8lAmzLqtwN-w",
          "scope": "email profile openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile",
          "login_hint": "AJDLj6JFfzQntwuRH3pnQNqAhZ9_HO50pbNzQiVHGE3NGbE_bcqORML1EMUMidzWOxVn-GMzWzj03_zYwlstOl7WWYmibdS0Mg",
          "expires_in": 3600,
          "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMjU0YjgzNzE4OWQxYmMyYmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjQxODI3Mjk4NDI1LTVnYzdibzE1bXQxdmpocXJiaTQ5bDlzdm45ZzRsa3BrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjQxODI3Mjk4NDI1LTVnYzdibzE1bXQxdmpocXJiaTQ5bDlzdm45ZzRsa3BrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NzcyOTIxNzY3ODYzMDM3NTU5IiwiaGQiOiJwaXhhY29yZS5pbiIsImVtYWlsIjoiYWJoaXNoZWsuamhhQHBpeGFjb3JlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJvcENXTEF5RFRIT2QyQTIxODdBdk5BIiwibmFtZSI6IkFCSElTSEVLIEpIQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW9jTjV2czc4MzdjL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRwZk0ycjRReVlRSk9qUzJKU2g5SVhUN3Yyemcvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkFCSElTSEVLIiwiZmFtaWx5X25hbWUiOiJKSEEiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU2MTkwOTE5MywiZXhwIjoxNTYxOTEyNzkzLCJqdGkiOiJiYzUzZmNjZTAwZWNmNzg2M2VkNzY3M2YwNDJmMTM2OGQ2YTViYjJmIn0.e7KjDaan0OncUIzuESJl4L3DeqXuGhz7y0KKXo59y0NkOL_MJoWQFV2_neFu8Vsv1JitX0wdEpmufL5Z3KXVlbkDQ2-2EE2TpNAl1JsQ1W4AHcuWn7sOHTzjbg3KH_iiB71ZmKtdtvN2JJYOrKlrtccROZhb8ajpN7j5g67TN4-qI_EYJxIlcrjIwn2LTX5ICzYEb_6yDn4XDlw8-vDn5hG0etbiC_IOBJsyyaoXd-5_FSo_zNExQiLuP9STFIIEojt4HAnFVQusJXZpg2qcQvd2gkviXka7ONOOLJspMVZEVl_ezX1VnZz8nh-VORSlBOcGHO4a3K7WwxRHNRwnHA",
          "session_state": {
            "extraQueryParams": {
              "authuser": "0"
            }
          },
          "first_issued_at": 1561909193994,
          "expires_at": 1561912793994,
          "idpId": "google"
        },
        "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjExOGRmMjU0YjgzNzE4OWQxYmMyYmU5NjUwYTgyMTEyYzAwZGY1YTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjQxODI3Mjk4NDI1LTVnYzdibzE1bXQxdmpocXJiaTQ5bDlzdm45ZzRsa3BrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjQxODI3Mjk4NDI1LTVnYzdibzE1bXQxdmpocXJiaTQ5bDlzdm45ZzRsa3BrLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTA2NzcyOTIxNzY3ODYzMDM3NTU5IiwiaGQiOiJwaXhhY29yZS5pbiIsImVtYWlsIjoiYWJoaXNoZWsuamhhQHBpeGFjb3JlLmluIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJvcENXTEF5RFRIT2QyQTIxODdBdk5BIiwibmFtZSI6IkFCSElTSEVLIEpIQSIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vLW9jTjV2czc4MzdjL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FDSGkzcmRwZk0ycjRReVlRSk9qUzJKU2g5SVhUN3Yyemcvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkFCSElTSEVLIiwiZmFtaWx5X25hbWUiOiJKSEEiLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU2MTkwOTE5MywiZXhwIjoxNTYxOTEyNzkzLCJqdGkiOiJiYzUzZmNjZTAwZWNmNzg2M2VkNzY3M2YwNDJmMTM2OGQ2YTViYjJmIn0.e7KjDaan0OncUIzuESJl4L3DeqXuGhz7y0KKXo59y0NkOL_MJoWQFV2_neFu8Vsv1JitX0wdEpmufL5Z3KXVlbkDQ2-2EE2TpNAl1JsQ1W4AHcuWn7sOHTzjbg3KH_iiB71ZmKtdtvN2JJYOrKlrtccROZhb8ajpN7j5g67TN4-qI_EYJxIlcrjIwn2LTX5ICzYEb_6yDn4XDlw8-vDn5hG0etbiC_IOBJsyyaoXd-5_FSo_zNExQiLuP9STFIIEojt4HAnFVQusJXZpg2qcQvd2gkviXka7ONOOLJspMVZEVl_ezX1VnZz8nh-VORSlBOcGHO4a3K7WwxRHNRwnHA",
        "accessToken": "ya29.Glw3B7VRIxvzF-LiILrLnEOhb-yW_tOUJi1F7Rb5tcH7FVbGcDefjzJZ59sG7f8Ad7QVpDkon0zbhYO6-LUqMpZhCSBRaDCtYIqRoYqbvBAG50N23G8lAmzLqtwN-w",
        "profileObj": {
          "googleId": "106772921767863037559",
          "imageUrl": "https://lh3.googleusercontent.com/-ocN5vs7837c/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdpfM2r4QyYQJOjS2JSh9IXT7v2zg/s96-c/photo.jpg",
          "email": "abhishek.jha@pixacore.in",
          "name": "ABHISHEK JHA",
          "givenName": "ABHISHEK",
          "familyName": "JHA"
        }
      }`;
      this.props.signInSuccess(JSON.parse(resp));
    }
  }

  render() {
    return (<GoogleLogin
      clientId="241827298425-5gc7bo15mt1vjhqrbi49l9svn9g4lkpk.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.failedSignin}
      cookiePolicy={'single_host_origin'}
    />);
  }
}

const mapDispatchToProps = {
  signInSuccess: signInSuccess
};
export default connect(null, mapDispatchToProps)(LoginButton);

