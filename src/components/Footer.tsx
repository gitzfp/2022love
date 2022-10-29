import {useAppDispatch, useAppSelector} from "app/hooks";
import {isDarkMode, isMobile, setDarkMode} from "features/setting/settingSlice";

import logoDark from "themes/202210/assets/logo.23e1af79.png";
import logoLight from "themes/202210/assets/logo_w.52f5887a.png";
import SvgIcon from "./SvgIcon";
import telegram from "themes/202210/assets/share_7.f3cb39a2.png";
import github from "themes/202210/assets/share_5.2a1f1696.png";
import twitter from "themes/202210/assets/share_8.ae8effba.png";
import facebook from "themes/202210/assets/share_3.21374ebb.png";
import discord from "themes/202210/assets/share_2.45a347d3.png";
import bitcoin from "themes/202210/assets/share_1.522ec023.png";

import p1 from "themes/202210/assets/sigma_w.e8608c37.png";
import p2 from "themes/202210/assets/cloudnine_w.f7b7f128.png";
import p3 from "themes/202210/assets/afa.159b3e03.png";
import p4 from "themes/202210/assets/verify_w.a13100a8.png";
import p5 from "themes/202210/assets/itech_w.ffaa4578.png";
import p6 from "themes/202210/assets/gamcare_w.c2139cc2.png";
import p7 from "themes/202210/assets/respon_w.38884bf7.png";
import p8 from "themes/202210/assets/aware_w.80e66929.png";
import p9 from "themes/202210/assets/eighteen_w.6097ab4b.png";
import p10 from "themes/202210/assets/license_w.49183d91.png";

import p1_dark from "themes/202210/assets/sigma.1d4c21cd.png";
import p2_dark from "themes/202210/assets/cloudnine.22d04592.png";
import p3_dark from "themes/202210/assets/afa.159b3e03.png";
import p4_dark from "themes/202210/assets/verify.f2a422bd.png";
import p5_dark from "themes/202210/assets/itech.3eab3608.png";
import p6_dark from "themes/202210/assets/gamcare.f7764b60.png";
import p7_dark from "themes/202210/assets/respon.3cbc9f21.png";
import p8_dark from "themes/202210/assets/aware.6334a112.png";
import p9_dark from "themes/202210/assets/eighteen.1ff0e7bf.png";
import {Link} from "react-router-dom";

const Footer = () => {
    const dispatch = useAppDispatch();
    const darkStatus = useAppSelector(isDarkMode);
    const mobileStatus = useAppSelector(isMobile);
    const darkModeStatus = useAppSelector(isDarkMode);

    return (
        <div className={`f921i8z ${mobileStatus ? "footer-type-2" : "footer-type-1"}`} id="page-footer">
            <div className={`spfmek0 footer-crypto-text-wrap ${mobileStatus && "small-crypto-wrap"}`}>
                <div className="footer-container page-max-width-wrap">
                    <div className={`htg4bew home-text-wrap ${mobileStatus && "small-text-wrap"}`}>
                        <div className="center-box">
                            <div className="crypto-text">
                                <h2>Crypto Online Casino</h2>
                                <p>
                                    Casinos online have not always been around, but we can safely say that online casinos have been used a lot since they came
                                    on the market. And it's not in short demand nor options, and now in 2022, we have 1000s and 1000s to pick from – it's just a
                                    matter of what you like and what payment options you would like to see at the casino.
                                </p>
                                <p>
                                    Players are always looking for something new, which will help make the gaming experience so much better and more accessible.
                                    Allowing the player to focus on the absolute fun of a casino, that's right, the games themselves.
                                </p>
                                <div className="other-info">
                                    <p>
                                        That's why we are now going to tell you all you need to know about a crypto casino or bitcoin gambling or bitcoin
                                        casino, whatever you want to call it.
                                    </p>
                                    <h2>What is crypto?</h2>
                                    <p>
                                        Before discussing what casino games you can play, you first need to understand what crypto is and why people prefer to
                                        use this payment option when you play your favorite games.
                                    </p>
                                    <p>
                                        Bitcoin and other cryptocurrencies have been growing and making a big name for themselves over the last few years. When
                                        it just started, it was a risk to buy bitcoin and the ones taking the risk are the ones benefiting from it now. Crypto
                                        has been probable fair income from it going up and down in the market, and the best about it all – is that you can do it
                                        completely anonymously.
                                    </p>
                                    <p>
                                        It might have been a risk back then, but today you can use bitcoin like any other payment option. A few are not
                                        accepting it, but BTC casino is a big hit and has continued to grow over the last 5+ years.
                                    </p>
                                    <p>
                                        And what most like about bitcoin as a deposit bonus or as a payment option, in general, is that you can easily link your
                                        bitcoin account to your bank account and have direct and instant access to your top crypto fun.
                                    </p>
                                    <h2>Can you use bitcoin on all online gambling sites?</h2>
                                    <p>
                                        All players would dream that all the different online casinos you find will allow you to use bitcoin and other crypto
                                        for your deposit and withdrawals. Unfortunately, the sad truth is that very few casinos accept it. But the good news is
                                        that the top online casinos will have one or the other crypto that you can at least use for deposits. When it comes to
                                        withdrawals, it's a bit harder to find a casino. Most likely, you'll have to pick one of the other payment options. The
                                        most found payment option to combine with bitcoin and crypto is a bank transfer straight into your bank account.
                                    </p>
                                    <p>
                                        For the newbies out there, we will drop a few names for other casinos to look at if you would like to try out betting
                                        sites that accept crypto. We have Doge Casino, Shiba Casino, and Solana Casino, and they are all worth your time. They
                                        will bring the excitement you are all seeking. You can pay with bitcoin – and the best part is that they are all giving
                                        you a great deposit bonus for using their casino and joining the crypto gambling world.
                                    </p>
                                    <h2>What are the advantages of Crypto gambling?</h2>
                                    <ul>
                                        <li>
                                            Anonymity – when using crypto on the online market, you do not need to give information that can lead back to you.
                                            You can hide 100% behind the computer screen and never give up as much as your first name. This is the top-selling
                                            point for this type of payment option for many.
                                        </li>
                                        <li>
                                            Worldwide access – as we know, many payment options are only available for some, not all, and it can be very
                                            frustrating and can be challenging for some players in some countries – because their limitations on payment options
                                            are severely blocking them from playing on the casinos and games they want to play on. With Bitcoin casinos and
                                            other crypto casinos, they will remove this limit and no longer have to look elsewhere for their fun.
                                        </li>
                                        <li>
                                            Verification – a real party pooper is when you have to fill out much information to access the fun. The simple
                                            answer is to use crypto, and you will no longer need to experience this.
                                        </li>
                                        <li>
                                            Transaction fees – ok, we understand that everyone needs to make money and that it's not all that gets covered by
                                            the ads, etc., that runs in the background and the standard fees that come with a transaction. But we also know that
                                            some payment options like to lay heavy on the fees they charge their clients when they use their service. If you use
                                            crypto as a payment option, you will not find this problem.
                                        </li>
                                    </ul>
                                    <h2>Disadvantages of crypto gambling</h2>
                                    <ul>
                                        <li>
                                            No chargebacks/reversals – unfortunately, you have no take backs when using this payment option. Once the
                                            transaction has been confirmed on your account and left your wallet, that's it. So be sure that you do your
                                            background check on the casino or online gambling site you want to spend your time and money on as you do not have
                                            the same security as credit cards and other traditional payment methods.
                                        </li>
                                        <li>
                                            No "the customer is always right" – their customer service when problems with transactions have been described not
                                            to be the best. They run good communication with all their customers, and you will not be left to sort it by
                                            yourself or anything. But the chances of getting money back once it has left your account are slim to none. So you
                                            need to be sure when you use it and how much you wish to use and that you really can trust the person/company you
                                            are making the payment to.
                                        </li>
                                    </ul>
                                    <h2>How can I be sure the online casino site is safe?</h2>
                                    <p>
                                        Most casinos online today are safe, and you don't need to worry about spending your time at them. However, there are
                                        some casinos that do not have your best interest at heart. That's why you always need to do your background check even
                                        when it comes to crypto gambling, or should we say at least if you want to use bitcoin to gamble. There's no extra
                                        security, and when the money leaves your wallet, you do not have a lot of chances to get the money back.
                                    </p>
                                    <p>
                                        Luckily there are ways to find out if you can truly trust the casino you want to spend your time on. The best way is to
                                        check if the casino has a valid license for online gambling. All casinos need this to run their casino legally, and it
                                        is not free, so it wouldn't be something they hide. Some casinos choose to obtain more than one of these licenses. This
                                        is a red flag for some, and we are here to tell you that it is not a red flag. A casino can have as many licenses as
                                        they please, but they can also have one.
                                    </p>
                                    <p>
                                        Also, searching the casino to look at what other players are saying is always a good idea. If a casino were to be
                                        unfair, you would not be the first one they have done it to – so there will be some kind of reviews out there telling
                                        you about what happened and what has been done about it. Use your best judgment, and if something feels off about the
                                        gambling site, then there's a lot more out there. Pick a different one, and there's no need to gamble with faith.
                                    </p>
                                    <h2>Do you still get bonuses if you deposit with crypto?</h2>
                                    <p>
                                        We can say that it's the casino experience, the thrill, the fun, and the games that bring the players to the different
                                        casinos, but we all know it would be a lie. Players want bonuses and a lot of bonuses to help them on their way to
                                        winning big. Bonuses are just like free money, and just watch the conditions that come with the bonuses before you
                                        accept them.
                                    </p>
                                    <p>
                                        Suppose you are to be deposited with crypto. In that case, user experience tells us that the bonuses are minor but not
                                        bad for what you get. If you are a first-time player at the casino, you will find a welcome package on a bitcoin casino.
                                        This is the bonus that will start your journey on the casino, and it will help you go for the big jackpot.
                                    </p>
                                    <p>
                                        It's not just the welcome bonus that's available. After using the welcome bonus, you need to keep your eyes out for the
                                        deposit bonus. That's the bonus the casinos sometimes give on a random deposit you set during your play. And if you are
                                        fortunate, it will bring big or small jackpots with it as you go.
                                    </p>
                                    <p>
                                        Just as when you set a standard deposit, you claim your bonus in the cashier when you put a crypto deposit. And remember
                                        that no one can force you into taking that bonus. The choice is yours. It's a choice you should make after you have
                                        looked over all the terms and conditions that come with the bonus. Remember, the wager requirements must be the entire
                                        field before you can withdraw any of the winnings you are lucky enough to win. Also, remember that even though there's a
                                        chance of winning a lot of money, you have to remember casinos are only for entertainment.
                                    </p>
                                    <h2>How to choose the right Bitcoin casino</h2>
                                    <p>
                                        We all want to find the best option right away, we want to hit the jackpot on the first spin, we all want to get it all,
                                        and we want it straight away. Unfortunately, that's not reality. We learn.
                                    </p>
                                    <p>
                                        There's no secret road map to massive payouts and the perfect casino on the first spin, even when it comes to the crypto
                                        casino – but here are a few tips:
                                    </p>
                                    <ul>
                                        <li>
                                            You need to look at what kind of games the casino offers if they don't have any games you like or any games you
                                            would like to try out.
                                        </li>
                                        <li>
                                            Suppose you have a type of cryptocurrency and not all of them or don't want to try a different one than the one you
                                            know. In that case, you have to check the payment methods to ensure that crypto casinos accept that type as a
                                            payment method on their casino.
                                        </li>
                                        <li>
                                            Bonus - we know we already talked about the important bonus, but we will repeat it. We know that many players are
                                            only paying attention to what kind of bonus the casino has to offer to their new and old players.
                                        </li>
                                        <li>
                                            Make sure you can play – most casinos have a list of restricted countries that cannot play in their casino. Make
                                            sure that your country isn't on the restricted list.
                                        </li>
                                    </ul>
                                    <h2>Is it difficult to deposit or make a withdrawal?</h2>
                                    <p>
                                        Many payment methods are difficult to understand, and crypto casinos' selling point is that everything is supposed to be
                                        more accessible when using it – so is it easier?
                                    </p>
                                    <p>
                                        Yes, it's as easy as stealing candy from a kid. There are just a few steps to make a deposit and just a few steps to
                                        make a withdrawal. And of course, we are here to tell you how to do just that:
                                    </p>
                                    <p>This is how you make a deposit using bitcoin or another crypto:</p>
                                    <ul>
                                        <li>
                                            First, you have to find your favorite casino that accepts crypto as payment options and make your way to the
                                            cashier.
                                        </li>
                                        <li>Pick if you want to use bitcoin or a different type of crypto.</li>
                                        <li>
                                            And then all that's left is to type in how much you would like to deposit and click enter. And within a few moments,
                                            the balance should be on your player account.
                                        </li>
                                    </ul>
                                    <p>This is how you make a withdrawal if and when you are lucky enough to win:</p>
                                    <ul>
                                        <li>
                                            The first thing you will have to do is to go over the to cashier and choose the method of withdrawal you prefer to
                                            use
                                        </li>
                                        <li>Fill in the amount you wish to make a withdrawal of, and then press confirm</li>
                                    </ul>
                                    <p>
                                        As you can see, this is a lot easier than what it would be with many of the other payment options you find on an online
                                        casino – but as we all know, it's not something we see all over.
                                    </p>
                                    <h2>What games can you find in a crypto casino?</h2>
                                    <p>
                                        After all, it is said that bonuses deposit all the other fun in a casino. What makes the best user experience for an
                                        online gambling site is what games you can find at the casino. A player needs to be able to find a few to choose from,
                                        and it needs to be some kind of balance to keep the market open for more than one type of player.
                                    </p>
                                    <p>
                                        Online slots are the absolute favorite among the players on the market, and let us just tell you a bit of what you can
                                        expect from an online slot machine on a crypto gambling site.
                                    </p>
                                    <p>
                                        Any game on a slot machine will be completely random, just like tossing coins. The computer program that controls the
                                        game selects a random symbol on the first row, then the second. Payback is the percentage of money paid back to the
                                        player on average. Each spin on the game has the same chance of winning or losing as the previous game; it has nothing
                                        to say how long since the last jackpot was paid out or whether the slot machine is "hot" or "cold."
                                    </p>
                                    <p>
                                        In the 80s, slot machines became very popular and even surpassed table games such as craps and blackjack. Slot machines
                                        and video poker now make up more than 70 percent of the casinos' profits. Now that we have gone online, it continues to
                                        profit from online crypto and bitcoin casinos and the casinos that don't accept the crypto methods. This is for a simple
                                        reason: big jackpots. When slot machines were digitized, it became possible to make the jackpot win less frequent, which
                                        also meant that the jackpot on online slot machines became larger when you first won it. And players love big jackpots!
                                        If you play for 5 dollars on a blackjack table, you can win a maximum of 7.5 dollars, but if you play with 3 dollars on
                                        a slot machine, you can win several thousand or millions of dollars in one go, but this is only if you are lucky. As we
                                        said before, you have to always look at casino games as entertainment and not a quick payday.
                                    </p>
                                    <p>
                                        But despite their popularity, there are three major problems with playing slot machines versus table games. First of
                                        all, casinos are not always open about the odds they place on each game, and this means that it is difficult to know how
                                        likely it is to win. Second, no matter what these secret odds are, they are often wrong and worse than table games such
                                        as craps, baccarat, and blackjack. Thirdly, slot machines run much faster than other games, and thus you can lose a lot
                                        of money in a short amount of time.
                                    </p>
                                    <p>
                                        Table games are the next big thing on online casinos, so let's talk about what you can expect from this type of game and
                                        give you newbies out there a chance to quickly learn before they buy bitcoin to spend their hard-earned money on online
                                        slots and other games for a quick payout.
                                    </p>
                                    <p>
                                        Most casinos offer table games, and if you play at a casino that does not have them, you should consider finding another
                                        casino that offers this.
                                    </p>
                                    <p>
                                        You do not have to play for money to play table games. Many casinos offer free play or demo play, so you do not deposit
                                        real money. In the long run, this may get a little boring, but there are full opportunities to deposit cash at a later
                                        date.
                                    </p>
                                    <p>
                                        How much you bet on a table game is up to you, but it is often a minimum bet to participate. This varies with the
                                        different casino sites, so feel free to check out yourself when you have found a casino that you will play at.
                                    </p>
                                    <p>
                                        Online Blackjack, also called twenty-one, is a table game most people associate with the casino. Nowadays, you can play
                                        blackjack at home in the living room, as long as you connect online and make a deposit at a casino. All the primary
                                        providers of casinos have blackjack in their portfolio.
                                    </p>
                                    <p>
                                        Online Poker is an exciting card game that suits most people. It takes time to become good at poker, and there has been
                                        a lot of discussion about whether poker is a game of skill. Here, there are conflicting opinions from the poker industry
                                        and authorities. The poker industry, for its part, believes that it is a game of skill. At the same time, the
                                        authorities see poker as a game under the Lottery Act and are more about luck than skill.
                                    </p>
                                    <p>
                                        Video Poker was early to be digital, so it was one of the first games you could play without having to hold cards in
                                        your hand. Video poker is almost always based on regular poker, where you play with the top five cards in your hand.
                                    </p>
                                    <p>Jacks, or better, is a common form of video poker. Here you win money as soon as you have a pair of jacks or better.</p>
                                    <p>
                                        In roulette, you can bet on combinations, single numbers, colors, rows, and whether the ball lands on odd or even
                                        numbers. The payout amount varies according to what you bet on. For even numbers and odd numbers, the payout sum is 1 to
                                        1, which applies to red or black.
                                    </p>
                                    <p>There is also a different range you can bet on here. The payout varies depending on which field you choose.</p>
                                    <p>
                                        Craps is a dice game where a player bets on the outcome of two dice. It sounds pretty simple but probably needs some
                                        explanation to understand how to play the game. The advantage of craps is that only dice are required to play, so you
                                        can easily play craps as long as you have two dice.
                                    </p>
                                    <p>
                                        If you have been to a casino, you know how it feels. Live casino gives you a bit of the same feeling. In some of the
                                        casinos, you have the opportunity to chat with the host along the way. It provides excitement, joy, and maybe a little
                                        frustration to play live casino, depending on the game's result.
                                    </p>
                                    <p>
                                        If you want to play live casino, you must register with one of the gaming providers that offer this. It is easy to
                                        register with a foreign gaming company, and you only fill in with information about yourself. After this, you deposit
                                        bitcoin or another form of real money and start playing.
                                    </p>
                                    <p>
                                        Casino players expect the casino to offer live casinos. It is so common to play live casinos that all casinos should
                                        have this in their range.
                                    </p>
                                    <p>
                                        There are several types of live casino games you can play online, and roulette and blackjack are the most common forms
                                        of live casinos. But there are also games like Monopoly, and you will become a millionaire and spin wheels you can play
                                        live.
                                    </p>
                                    <p>
                                        The selection of games is usually massive, but you need to know that it varies from casino to casino, so you will not
                                        always wind the same crypto casino games on different crypto casino sites. This is why we told you when giving you tips
                                        for what casinos to play, or not what casinos to play, but how to find the perfect casino for you to look at the games
                                        you can find on the casino.
                                    </p>
                                    <p>
                                        And remember to check out what kind of bonuses you can get, not all casinos give you a deposit bonus, but you will find
                                        reload bonuses and no deposit bonus where you are not looking if you are not looking hard enough to start with. And if
                                        you are lucky, you can find casinos that give away daily cashback.
                                    </p>
                                    <h2>Can I use a mobile or tablet?</h2>
                                    <p>
                                        Suppose you want to play on the top online casinos. In that case, you want them all to be mobile casinos, just simply
                                        for the pure pleasure of playing whenever and wherever you are at the time of the day you want to play.
                                    </p>
                                    <p>
                                        Betting sites that offer mobile casinos are getting more hits in a day than the ones not offering mobile casinos. We all
                                        know that no one wants to sit in front of a laptop anymore for their online gambling. The best is that you can find all
                                        the fair games and the fantastic welcome bonus that you usually see if you play from a laptop.
                                    </p>
                                </div>
                            </div>
                            <div className="btn-more">
                                <span className="cl-primary">Show more &gt;&gt;</span>
                            </div>
                        </div>
                    </div>
                    <div className={`ste0mrh helpus-wrap ${mobileStatus && "small-helpus-wrap"}`}>
                        <div className="helpus-inner">
                            <div className="help-us-infos">
                                <h2 className="tit">Help us improve Product Experience</h2>
                                <textarea
                                    placeholder="If you find any bugs or usability difficulties Please Let us know, Leave your messages right here."
                                    cols={30}
                                    rows={10}
                                    defaultValue={""}
                                />
                                <div className="send-wrap">
                                    <button className="ui-button button-normal s-conic">
                                        <div className="button-inner">Leave a Message</div>
                                    </button>
                                    <div className="message">
                                        <p>Now get rewarded for your valuable feedback.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="contact">
                                Or Email us:
                                <a href="mailto:feedback@bcgame.com" className="cl-primary">
                                    feedback@bcgame.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-max-width-wrap footer-infos">
                <div className={`f1489uyq footer-links-wrap ${mobileStatus && "small-links"}`}>
                    <div className="footer-link-wrap">
                        <p className="f-t">Casino</p>
                        <div className="links">
                            <a href="/casino" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Casino Home</span>
                            </a>
                            <Link to="/gamelist/slots" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Slots</span>
                            </Link>
                            <Link to="/gamelist/live" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Live Casino</span>
                            </Link>
                            <a href="/new-releases" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>New Releases</span>
                            </a>
                            <Link to="/gamelist/home_recommend" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Recommended</span>
                            </Link>
                            <a href="/tagname/table-game" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Table Game</span>
                            </a>
                            <a href="/tagname/blackjack" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>BlackJack</span>
                            </a>
                            <a href="/tagname/roulette" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Roulette</span>
                            </a>
                            <a href="/tagname/baccarat" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Baccarat</span>
                            </a>
                        </div>
                    </div>
                    <div className="footer-link-wrap">
                        <p className="f-t">Sports</p>
                        <div className="links">
                            <a href="/sports" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Sports Home</span>
                            </a>
                            <a href="/sports?bt-path=%2Flive" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Live</span>
                            </a>
                            <a href="/help/terms-sports" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Rules</span>
                            </a>
                        </div>
                    </div>
                    <div className="footer-link-wrap">
                        <p className="f-t">Promo</p>
                        <div className="links">
                            <a href="/vip-club" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>VIP Club</span>
                            </a>
                            <a href="/affiliate" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Affiliate</span>
                            </a>
                            <a href="/promotion" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Promotions</span>
                            </a>
                            <a href="/lottery" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Lottery</span>
                            </a>
                            <a href="#/referfriend" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Refer a friend</span>
                            </a>
                        </div>
                    </div>
                    <div className="footer-link-wrap">
                        <p className="f-t">Support/Legal</p>
                        <div className="links">
                            <a href="/help" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Help center</span>
                            </a>
                            <a href="https://www.begambleaware.org/" keep-scroll-position="true" className="footer-link-item" target="_blank">
                                <span>Gamble Aware</span>
                            </a>
                            <a href="/help/provably-fair" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Fairness</span>
                            </a>
                            <a href="/help/faq" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>FAQ</span>
                            </a>
                            <a href="/help/privacy" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Privacy Policy</span>
                            </a>
                            <a href="/help/terms-service" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Terms Of Service</span>
                            </a>
                            <a href="/help/self-exclusion" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Self-exclusion</span>
                            </a>
                            <a href="/help/aml" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>AML</span>
                            </a>
                            <a href="/casino" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Design Resources</span>
                            </a>
                            <a href="/app_download/android" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>APP</span>
                            </a>
                            <button className="footer-link-item">Live Support</button>
                        </div>
                    </div>
                    <div className="footer-link-wrap">
                        <p className="f-t">About us</p>
                        <div className="links">
                            <a href="https://blog.bc.game/" keep-scroll-position="true" className="footer-link-item" target="_blank">
                                <span>News</span>
                            </a>
                            <a href="https://bcgame.com/" keep-scroll-position="true" className="footer-link-item" target="_blank">
                                <span>Official Mirrors</span>
                            </a>
                            <a href="https://angel.co/company/bc-game-2" keep-scroll-position="true" className="footer-link-item" target="_blank">
                                <span>Work with us</span>
                            </a>
                            <a href="mailto:business@bc.game" keep-scroll-position="true" className="footer-link-item" target="_self">
                                <span>Business Contacts</span>
                            </a>
                            <a href="https://help.bc.game" keep-scroll-position="true" className="footer-link-item" target="_blank">
                                <span>Help Desk</span>
                            </a>
                            <button className="footer-link-item">Verify Representative</button>
                        </div>
                    </div>
                    <div className="footer-link-wrap">
                        <p className="f-t">Join our Community</p>
                        <div className="social-links">
                            <a className="telegram" href="https://t.me/bcgamewin" target="_blank" rel="noopener noreferrer">
                                <img src={telegram} alt="telegram" />
                            </a>
                            <a className="github" href="https://github.com/bcgame-project" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github" />
                            </a>
                            <a className="twitter" href="https://twitter.com/BCGameOfficial" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="twitter" />
                            </a>
                            <a className="facebook" href="https://www.facebook.com/bcgameofficial" target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a className="discord" href="https://discord.gg/bcgame" target="_blank" rel="noopener noreferrer">
                                <img src={discord} alt="discord" />
                            </a>
                            <a className="bitcoin" href="https://bitcointalk.org/index.php?topic=5088875.0" target="_blank" rel="noopener noreferrer">
                                <img src={bitcoin} alt="bitcoin" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fn26v6y footer-intro-wrap">
                    <p className="tit">Sponsorship and Gaming Responsibilities</p>
                    <div className="imgs-wrap">
                        <div className="sigma">
                            <a keep-scroll-position="true" rel="noopener noreferrer" target="_blank">
                                <img alt="sigma" src={darkModeStatus ? p1_dark : p1} />
                            </a>
                        </div>
                        <div className="cloudnine">
                            <a href="https://cloud9.gg/" keep-scroll-position="true" rel="noopener noreferrer" target="_blank">
                                <img alt="cloudnine" src={darkModeStatus ? p2_dark : p2} />
                            </a>
                        </div>
                        <div className="afa">
                            <a href="https://afa.com.ar/" keep-scroll-position="true" rel="noopener noreferrer" target="_blank">
                                <img alt="afa" src={darkModeStatus ? p3_dark : p3} />
                            </a>
                        </div>
                        {mobileStatus && <div className="line"></div>}
                        <div className="verify">
                            <a href="https://cryptogambling.org" keep-scroll-position="true" rel="noopener noreferrer" target="_blank">
                                <img alt="verify" src={darkModeStatus ? p4_dark : p4} />
                            </a>
                        </div>
                        <div className="itech">
                            <a
                                href="http://www.itechlabs.com/certificates/BCGame/RNG_Certificate_UK_BCGame_ITL2002455_12Oct20.pdf"
                                keep-scroll-position="true"
                                rel="noopener noreferrer"
                                target="_blank">
                                <img alt="itech" src={darkModeStatus ? p5_dark : p5} />
                            </a>
                        </div>
                        <div className="gamcare">
                            <a href="https://www.gamcare.org.uk" keep-scroll-position="true" rel="noopener noreferrer" target="_blank">
                                <img alt="gamcare" src={darkModeStatus ? p6_dark : p6} />
                            </a>
                        </div>
                    </div>
                    <div className="imgs-text-wrap">
                        <div className="respon">
                            <a href="/help/gameble-aware" keep-scroll-position="true" rel="noopener noreferrer">
                                <img alt="respon" src={darkModeStatus ? p7_dark : p7} />
                            </a>
                        </div>
                        <div className="aware">
                            <a href="/help/gameble-aware" keep-scroll-position="true" rel="noopener noreferrer">
                                <img alt="aware" src={darkModeStatus ? p8_dark : p8} />
                            </a>
                        </div>
                        <div className="eighteen">
                            <a href="/help/protect-minors" keep-scroll-position="true" rel="noopener noreferrer">
                                <img alt="eighteen" src={darkModeStatus ? p9_dark : p9} />
                            </a>
                        </div>
                        {mobileStatus && <div className="line"></div>}
                        <div className="intro-text-wrap">
                            <div className="license">{/* <img alt="license" src={darkModeStatus ? p10_dark : p10} /> */}</div>
                            <p>
                                BC.GAME is operated by BlockDance B.V. (Commercial register of Curaçao no.158182, Emancipatie Boulevard Dominico F. "Don"
                                Martina 31, Curaçao) under a sublicense CIL pursuant to Master gaming License #5536/JAZ.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={`f10jc7zo footer-coins-wrap ${mobileStatus && "small-coins"}`}>
                    <p className="coins-t">Accepted Networks</p>
                    <div className="coins-list">
                        <div className="fd-ci">
                            <div className="Bitcoin c1vaig3w icon-Bitcoin img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Ethereum c1vaig3w icon-Ethereum img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Doge c1vaig3w icon-Doge img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Ripple c1vaig3w icon-Ripple img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Cardano c1vaig3w icon-Cardano img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Polkadot c1vaig3w icon-Polkadot img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Tron c1vaig3w icon-Tron img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="BSC c1vaig3w icon-BSC img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Avalanche c1vaig3w icon-Avalanche img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Solana c1vaig3w icon-Solana img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Polygon c1vaig3w icon-Polygon img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Arbitrum c1vaig3w icon-Arbitrum img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Optimism c1vaig3w icon-Optimism img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Cronos c1vaig3w icon-Cronos img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Fantom c1vaig3w icon-Fantom img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Thorchain c1vaig3w icon-Thorchain img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Cosmos c1vaig3w icon-Cosmos img-fill" />
                        </div>
                        <div className="fd-ci">
                            <div className="Near c1vaig3w icon-Near img-fill" />
                        </div>
                    </div>
                </div>
                <div className="f1j2aep6 footer-bottom-wrap">
                    <div className="top-wrap">
                        <img alt="logo" className="logo" src={darkModeStatus ? logoDark : logoLight} />
                        <p className="copyrihgt ttu">©2022 bc.game ALL RIGHTS RESERVED</p>
                        <p className="btc-info">1BTC=$19,342.10</p>
                        <div className="fd-twrap">
                            <p className="fd-t">
                                Casino Platform loved and trusted by <span>100 million</span> users
                            </p>
                            <p className="fd-b">
                                BC.GAME is a community-based crypto casino that offers their players the best online casino experience possible! At BC.GAME, we
                                are convinced that blockchain will change the online crypto gambling industry forever! Jump in and check it out for yourself!
                                Have fun and earn crypto!
                            </p>
                        </div>
                    </div>
                    <div className="footer-bot-wrap">
                        <div className="lqjx7ce lan-fiat-wrap">
                            <div className="lan-local-wrap">
                                <div className="f-select">
                                    <span>English</span>
                                    <SvgIcon dataKey="icon_Arrow" />
                                </div>
                            </div>
                        </div>
                        <div className="f-theme-top">
                            <div className={`tftnvkv theme-wrap ${!darkStatus && "light"}`}>
                                <button className={darkStatus ? "active" : ""} onClick={() => dispatch(setDarkMode(true))}>
                                    <SvgIcon dataKey="icon_Dark" />
                                </button>
                                <button className={darkStatus ? "" : "active"} onClick={() => dispatch(setDarkMode(false))}>
                                    <SvgIcon dataKey="icon_Light" />
                                </button>
                                <div className="theme-bg" />
                            </div>
                            <div className="to-top" onClick={() => window.scrollTo(0, 0)}>
                                <SvgIcon dataKey="icon_Arrow" />
                                <span>Top</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
