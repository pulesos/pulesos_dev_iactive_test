import './MessageItem.scss'
import Preloader from '../Preloader/Preloader'

const avatar = require('../../assets/img/avatar.png') as string
const favorite = require('../../assets/img/favorite.png') as string
const settings = require('../../assets/img/settings.png') as string
const rectangle = require('../../assets/img/rectangle.png') as string
const arrow = require('../../assets/img/arrow.png') as string


type UrlType = {
    url: string
    type: string
}

type MessageItemType = {
    attachments: UrlType[]
    author: string
    channel: string
    content: string
    date: string
    id: string
    loading: boolean
}

const MessageItem: React.FC<MessageItemType> = ({date, author, content, channel, attachments, loading}) => {
    return (
        <>
            {loading ? <Preloader/> :
                        <div className='wrapper'>
                        <div className='messageItem__header'>
                            <div className='messageItem__time'>{date}</div>
                            <div className='messageItem__profile'>
                                <img src={avatar} alt='avatar'/>
                                <div className='messageItem__profile__descr'>
                                    <span className='messageItem__profile__descr__author'>{author}</span>
                                    <span className='messageItem__profile__descr__channel'>{channel}</span>
                                </div>
                            </div>
                        </div>
                        <div className='messageItem__nav'>
                            <div className='messageItem__btns'>
                                <button>Левый</button>
                                <button>Центр</button>
                                <button>Правый</button>
                            </div>
                        </div>
                        <div className='messageItem__img'>
                            <img src={arrow} alt="arrow"/>
                            <img src={rectangle} alt="rectangle" />
                            <img src={settings} alt="settings" />
                            <img src={favorite} alt="favorite" />
                        </div>    
                            
                        
                        <div className='messageItem__descr'>
                            <div>{content}</div>
                        </div>
                        <div className='messageItem__attachments'>
                            <span>Далее</span>
                            {attachments.map((item) => 
                                item.type === "video" ? (
                                    <video controls className='messageItem__attachments__video'>
                                        <source src={item.url} type="video/mp4"></source>{" "}
                                    </video>
                                ) : (
                                    <img src={item.url} alt="" className='messageItem__attachments__img'/>)
                                )}
                            
                            
                        </div>
                        
                    </div>
            }
        </>
        

        
    )
}

export default MessageItem