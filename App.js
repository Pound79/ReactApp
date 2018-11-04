import React from 'react'
import { connect } from 'react-redux';
import { load } from './user'

// connect$B$N(Bdecorator
@connect(
  // props$B$K<u$1<h$k(Breducer$B$N(Bstate
  state => ({
    users: state.user.users
  }),
  // props$B$KIUM?$9$k(Bactions
  { load }
)
export default class App extends React.Component {

  componentDidMount() {
    // user$B<hF@(BAPI$B%3!<%k$N(Baction$B$r%-%C%/$9$k(B
    this.props.load()
  }

  render () {
    const { users } = this.props
    // $B=i2s$O(Bnull$B$,JV$C$F$/$k!J(BinitialState$B!K!"=hM}40N;8e$K:FEY7k2L$,JV$C$F$/$k(B
    console.log(users)
    return (
      <div>
          {/* $BG[Ns7A<0$GJV5Q$5$l$k$?$a(Bmap$B$GE83+$9$k(B */}
          {users && users.map((user) => {
            return (
                // $B%k!<%W$GE83+$9$kMWAG$K$O0l0U$J(Bkey$B$r$D$1$k!J(BReactJS$B$N7h$^$j;v!K(B
                <div key={user.email}>
                  <img src={user.picture.thumbnail} />
                  <p>$BL>A0(B:{user.name.first + ' ' + user.name.last}</p>
                  <p>$B@-JL(B:{user.gender}</p>
                  <p>email:{user.email}</p>
                </div>
            )
          })}
      </div>
    )
  }
}
