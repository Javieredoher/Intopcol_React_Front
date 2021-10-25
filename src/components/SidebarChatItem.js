import React from 'react'

export const SidebarChatItem = () => {
    return (
          
            <div className="chat_list ">
                {/* Active Chat */}

                <div className="chat_people">
                    <div className="chat_img"> 
                        <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="avatar" />
                    </div>
                    <div className="chat_ib">
                        <h5>Some random name</h5>
                        <span className="text-success">Online</span>
                        <span className="text-danger">Offline</span>
                    </div>
                </div>
            </div>
          
    )
}
