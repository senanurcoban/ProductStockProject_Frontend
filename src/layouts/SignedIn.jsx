import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'
export default function SignedIn({signOut}) {
  return (
    <div>
       <Menu.Item>
                <Image avatar spaced="right" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftr.depositphotos.com%2Fstock-photos%2Fprofil-resmi.html&psig=AOvVaw3VnkPT-G9-XPGCIT3cjTdu&ust=1690566867936000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCKCigNvAsIADFQAAAAAdAAAAABAI"/>
                <Dropdown pointing="top left" text="Sena">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
    </div>
  )
}
