import React, {
    useState,
    useEffect
} from 'react';
import Modal from './Modal.js';
import logo from '../assets/full.jpg';
import es from '../assets/es.png'
import tg from '../assets/tg.png'
import tw from '../assets/tw.png'
import dx from '../assets/dx.png'
import td from '../assets/td.png'
import cmc from '../assets/cmc.png'
import cg from '../assets/cg.png'
// import bg from '../assets/bg.png'
import pl from '../assets/pl.png'
import ae from '../assets/ae.png'
import kym from '../assets/kym.jpg'
import mx from '../assets/mx.png'
import gif from '../assets/gif.GIF'
import hat from '../assets/hat.png'
import hub from '../assets/hub.png'
import gt from '../assets/gt.png'
import bm from '../assets/bm.png'
import cs from '../assets/cs.png'
import ce from '../assets/ce.png'
import audioFile from '../assets/audio.mp3'
import thumb from '../assets/thumb.gif'
import btse from '../assets/btse.png'

import '../App.css';

function App() {
    const [modalVisible, setModalVisible] = useState(true);
    const [audioPlaying, setAudioPlaying] = useState(false);

    // Use useEffect to show the modal when the component mounts
    useEffect(() => {
        setModalVisible(true);
    }, []);

    const closeModal = () => {
        setModalVisible(false);
        setAudioPlaying(true);
    };

    return ( <
        div className = "App" >
        <
        div className = 'welcome' >
        <
        Modal show = {
            modalVisible
        }
        onClose = {
            closeModal
        }
        /> <
        /div> {
            audioPlaying && ( <
                audio autoPlay loop >
                <
                source src = {
                    audioFile
                }
                type = "audio/mpeg" / >
                Your browser does not support the audio element. <
                /audio>
            )
        } <
        div >
        <
        div className = 'name' > Real Smurf Cat < /div> { /* <span className='iname'>ERC-20 Token</span> */ } <
        div className = "dropdown" >
        <
        button className = "dropbtn" > Buy on exchange < /button> <
        div className = "dropdown-content-container" >
        <
        a href = 'https://www.gate.io/trade/SMURFCAT_USDT' > < img src = {
            gt
        }
        width = '80px'
        alt = 'exchange' / > GATE < /a> <
        a href = 'https://www.bitmart.com/trade/en-US?layout=pro&theme=dark&symbol=SMURFCAT_USDT' > < img src = {
            bm
        }
        alt = 'exchange'
        width = '80px' / > BitMart < /a> <
        a href = 'https://www.mexc.com/exchange/SMURFCAT_USDT?_from=search_spot_trade' > < img src = {
            mx
        }
        alt = 'exchange'
        width = '80px' / > MEXC < /a> { /* <a href='https://www.bitget.com/spot/SMURFCATUSDT?type=spot'><img src={bg} width='80px' alt='exchange'/>BITGET</a> */ } <
        a href = 'https://poloniex.com/trade/SMURFCAT_USDT?type=spot' > < img src = {
            pl
        }
        width = '80px'
        alt = 'exchange' / > POLONIEX < /a> <
        a href = 'https://www.coinstore.com/#/spot/SMURFCATUSDT' > < img src = {
            cs
        }
        width = '80px'
        alt = 'exchange' / > COINSTORE < /a> <
        a href = 'https://ascendex.com/en/cashtrade-spottrading/usdt/smurfcat' > < img src = {
            ae
        }
        width = '80px'
        alt = 'exchange' / > ASCENDEX < /a> <
        a href = 'https://www.coinex.com/en/info/SMURFCAT' > < img src = {
            ce
        }
        width = '80px'
        alt = 'exchange' / > COINEX < /a> <
        a href = 'https://www.btse.com/en/trading/SMURFCAT-USD' > < img src = {
            btse
        }
        width = '80px'
        alt = 'exchange' / > BTSE < /a> <
        /div> <
        /div> <
        div className = 'dropdown' >
        <
        a href = 'https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0xfF836A5821E69066c87E268bC51b849FaB94240C' >
        <
        button className = 'uni' > Buy on UniSwap < /button> <
        /a> <
        /div> {
            /* <div className='dropdown'>
                    <a href='https://flooz.xyz/trade/how-to-buy/0xfF836A5821E69066c87E268bC51b849FaB94240C'>
                      <button className='flooz'></button>
                    </a>
                  </div> */
        } <
        /div> <
        body >
        <
        div >
        <
        img src = {
            logo
        }
        alt = "logo"
        className = "App-logo"
        width = '500vw' / >
        <
        p className = 'caption' > Smurf Cat with Ethereum Crystal - Nate Hallinan 2023 < /p> <
        /div> <
        h1 className = 'top front' > HE IS REAL. < /h1> <
        div className = 'container' >
        <
        a href = 'https://etherscan.io/token/0xff836a5821e69066c87e268bc51b849fab94240c'
        className = 'item' >
        <
        img src = {
            es
        }
        width = '40px'
        alt = 'etherscan icon' / >
        <
        span > Etherscan < /span> <
        /a> <
        a href = 'https://www.dextools.io/app/en/ether/pair-explorer/0x977c5fcf7a552d38adcde4f41025956855497c6d'
        className = 'item' >
        <
        img src = {
            dx
        }
        width = '40px'
        alt = 'dextools icon' / >
        <
        span > DEXTools < /span> <
        /a> <
        a href = 'https://coinmarketcap.com/currencies/real-smurf-cat-eth/'
        className = 'item' >
        <
        img src = {
            cmc
        }
        width = '40px'
        alt = 'cmc icon' / >
        <
        span > CMC < /span> <
        /a> <
        a href = 'https://www.coingecko.com/en/coins/real-smurf-cat'
        className = 'item' >
        <
        img src = {
            cg
        }
        width = '50px'
        alt = 'coingeco icon' / >
        <
        span > CoinGecko < /span> <
        /a> <
        /div> <
        div className = 'container' >
        <
        a href = 'https://knowyourmeme.com/memes/%D1%88%D0%B0%D0%B9%D0%BB%D1%83%D1%88%D0%B0%D0%B9-smurf-cat'
        className = 'item' >
        <
        img src = {
            kym
        }
        width = '40px'
        alt = 'history icon' / >
        <
        span > History < /span> <
        /a> <
        a href = 'https://twitter.com/smurfcateth'
        className = 'item' >
        <
        img src = {
            tw
        }
        width = '40px'
        alt = 'twitter icon' / >
        <
        span > Twitter < /span> <
        /a> <
        a href = 'https://t.me/smurfcateth'
        className = 'item' >
        <
        img src = {
            tg
        }
        width = '40px'
        alt = 'telegram icon' / >
        <
        span > Telegram < /span> <
        /a> <
        a href = 'https://smurfme.vercel.app'
        className = 'item' >
        <
        img src = {
            hat
        }
        width = '40px'
        alt = 'app icon' / >
        <
        span > PFP Tool < /span> <
        /a> <
        /div> <
        p className = 'title' > < span className = 'blue' > SMURFCAT < /span> is a memecoin launched on the ethereum blockchain. he is so cute! this little guy is just going on his jolly way!<br/ > < br / > the token was created as a tribute to the smurf cat internet meme originally created by nate hallinan, and newly popularized by tiktok. < /p> <
        div className = 'container' >
        <
        a href = 'https://mint.smurfcat.eth.limo'
        className = 'itembut' >
        <
        img src = {
            thumb
        }
        width = '100px'
        alt = 'hub icon' / >
        <
        span > Descendants of Smurfcat NFT < /span> <
        /a> <
        /div> <
        div className = 'container' >
        <
        a href = 'https://smurfcat.org'
        className = 'itembut' >
        <
        img src = {
            hub
        }
        width = '100px'
        alt = 'hub icon' / >
        <
        span > Check out SMURFCAT.ORG < /span> <
        /a> <
        /div> <
        p className = 'faqt' > What does шайлушай mean ? < /p> <
        p className = 'faq' > < span className = 'blue' > "Shailushai" < /span> is the name that TikTok gave the real smurf cat! It's a gibberish word in Russian but is similar to a word that translates to <span className='blue'>"little scoundrel."</span > < /p> <
        img src = {
            gif
        }
        className = 'dwayne'
        alt = 'dwayne' / >
        <
        p className = 'faqt' > Why smurfcat.eth.limo ? < /p> <
        p className = 'faq' > This website is hosted on the < span className = 'blue' > interplanetary file system < /span> which is a public blockchain for data. It is routed through <span className='blue'>Ethereum</span > Name Service and the browser reads < span className = 'blue' > ipfs < /span> data through a "limo" extension. This makes it completely <span className='blue'>decentralized</span > by nature! < /p> <
        img src = {
            td
        }
        width = '400px'
        alt = 'real' / >
        <
        p className = 'title front' > ZERO TAX, CONTRACT RENOUNCED, < br / > 100 % OF SUPPLY SENT TO UNISWAP & LP BURNT < /p> <
        p className = 'fairy' > concept by nate hallinan 2011, made possible by dmitri < /p> <
        p className = 'blue smol' > real smurf cat contact : smurfcatETHlimo @gmail.com < /p> <
        /body> <
        /div>
    );
}

export default App;