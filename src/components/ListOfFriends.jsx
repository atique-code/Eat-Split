import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import AddFriend from './AddFriend';

const ListOfFriends = () => {
    

    const Users = [
        {
            addFriend: "sarib",
            image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtaS19QnWOppsGTifm9fX9F_5QZ30KZUrtskFrAYF-RTLbn8RF5b_M9SRgg&s',
            id: 10,
            OweMoney: "nothing"
        },
        {
            addFriend: "atique",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ChXEitZ344uqUdu70KWL4dfrSqjiZfhFrA&usqp=CAU",
            id: 11,
            OweMoney: "nothing"
        },
        {
            addFriend: "jumman",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRUVGBgYGhgYGRoYGBEYGBgYGBgZHBgYGhocIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0PzA0NTEBDAwMEA8QHhISGjEhISE0NDQxNDQ0NDc0NDQ0NDQ0NDQ0MTQ0NDE0MTQ0NDQxNDQ0MTExNDQ0MT80MTQ0NDE0Mf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABCEAACAQIDBAcEBwcDBAMAAAABAgADEQQSIQUxQVEGImFxgZGxEzKhwQdCUnLR4fAUI2KCkrLxJDNjQ6KzwhVTc//EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAIREBAQACAgICAwEAAAAAAAAAAAECEQMxIUESUSJhcRP/2gAMAwEAAhEDEQA/AMTCJGO07uAZpExjmMZAI5VjZKi2gDRoiuYixQpaKsaRJEiBwiwiXkuUizG3oEwv3+Riq68BfvkgduwTneSuk457RhTyPkYGS57cbkxKlYDQi8k5Kf5xFFjSRw3ekdOuOW3OzQjWjokqGRSYrCNgEIQgERhFhAhhHONY2AQhCQTuY2F4jGUMJiQigSBUWSGIIMZQ2O3QAtEgCyRYxY52sLx0QjtwHjEA5yI1POMLk9k89y3Xoxmpp1+0tutGtVPOc14awu3Qrhdd5kTMSbyPPzgHEB4MnpvfvnNmheXHLTOWMyjthIqL30O+SztjdzbhZq6JGsIuaIGlCQhCAQhCA1xI5NIiIoSEISB8axilo2Wgj1EYJITECwtBYsAgBC8CYCLvjq6dXwiUlvJKmsXo6quvFLAfnFo0yzKg3swQd7Gw9Z6/hdgU8NTBpUKb1Le+5Ci/NnsW8hPJllI9eGFy9vJP2eplzCnUK8wjkeYEvcB0Zq1EzpTd77jmponeTmuPLhPQKGPx19aWDdOIp1nLAeKAHxk2E2hQos6NUpUw1iFL0xlJ3rvmMs79O+PHjJuvMa+zaGHcJiPaO51NOiNVHDU6xlTBYdj1WxWHHOvRLJ4upGUdpBnpjIqM9ZUznTLkNO7btzE2+MRdsY4kk7PUp/DXpFiPumw+MkzMsMY8223sD9nppUVxUV7hmUWUE6pbU3BF9ecplae1bRwFPEYaorUvZFlOlgCrHUNppcGx8J4kJrDLccuXGY3w6KJ1k6tONZ0K956cPEeXPzTzCJeF50YLAGJeNvaA+EaDFvAWMaOvEMUNtCFoSBGiXgYkByR4jBHiA4QgISgjWjo0i5tAno7o/JuG4cYqCEa8Jvy2PSfZFEYR6iUhSbDsclRCA7FGy5nsBox1vftmHTpNjFFhia9vvsfWbPpCDX2UtUOb01QOL6MVdUbN26ZvGeYCeTCd7+3t5Muvj48LPEbVr1Pfr1n7C9S39N7fCcQtIs0QmdNOX9dlDFugslR0HJHdQe8KReddHpBi193EVbdrsf7ryoBi5jJ8Yvys9thsPauOxLmj+1ugyO+qoR1Ru3X1vvlps/oMDRRqrOHqZQpXKFps4umYHVhewvKb6N9cco506g/tnpGIQYWk71HJRX9obkmwU3RFvxZiABOWdsy1i9HHJcflk8cdCpKkWKkgjkQbEeYiKSI6rULszt7zEse9iSfiYmWemPEmVrxbyG9pIDeb+TNh141ol461xflCGx94yKIlDrwvGwgOhGwgMMIQmdhyx8hBkizUEkIGEoIJvvAwQboHSIRITSHVtoVVo1KCN1KmUsO1SDpyvlAPcJm5eVTrK3F4VlAe3UYkA/xDep7dQfGccsZPLtjlb4+nLCEJhoRGNosFQsQoBJJsANSTyEUXPRDaRw1dq+XMUpvYEkAlmRRrw3/CWnSXpTVxmVWUIim4RSTdvtMbC9hewtpcyTFdHf2XACo/+5WqJcDcqAOQt+JuLk+HCZ8RjMcrsyuWM+JDHU5GY9G1m45hxBTaSRuWESJrHrpIKbW0k9502zQ1O+okUlBiOl9RII4QhAIQhAbEEDASUgImh2P0VxGJw7YigocI7q6Gyt1VRgyX0e4Yi1xqOPDPzUbJ6UtSwq4cdR6VT2tJwWt1tWVlXeblrG9tbEEaGbqzW/KPaHRXEYfDDE1lCBmRUS+ZznBN3togsBvN7nhKK80e0Olj1MNUoMMzVnV6j3a1lIKqqtuOguQbWAAAmaE1jv2XXo4Ry741Y4SomiEwjXNhLUjnZrzX9BtnJiUrUai5kurEd4tcHgervmSpUXcnIjvYXIVWYgc9BPQfo62fVovV9ouQuqWUkZhbMdQN2+cOa/jXfg8ZxmeknQGtQJeherT5ae0TvX6w7Rr2cZi2BBIIsRvB0I7wd0+lnAO+Zbbeykc3ZFJuDmyqT262vPNjzX29d4Jl14ePYLZtSr7im32ju8OfhN10Y6KBHDstyNQSNe+3Adk1OzMAltF7JoMPQVRoP12yZ8lviOmPFjh+6xn0mIEwtBP+QDyRzPMp6906wiVkpq5NkfNoQL9Rxbu1mHbomXuabhRycE+AI/Cd+G/i8fPv5eWYtBZ1Y/Z9Wg2WqjoTuuNG7VbcZyTq4p7wvGqdIsqGsI9H4RI1oR0RVOshpvwkk3Kh1ZeMgvOgG4tOeSgvCEJNhLxY28faItNvHLEirKhbySR2kqiUOiQiohYhVBJOgABJJ5ADeYEkstk7EfEMM2ZKdyDUsN4G5b7zew7Ly+2T0LrZPaVksdCtNjqRvJYKbjuvebbZdek6LQKCmUFgmgFhxQ8ZnLL0sxZZdmJhGX2YOQ2uTYsx5k23+UtNn1AK7PfRwCL9n+TOrHYHIMr3amTv4oOJ8JFjtm+yCPh7ldcwLBwbGwZWAG8a2nHOXLHUd+LKY5bsX2bjOLFpczi2Xt/D1SUFRQ6mzI5yOp5FWsfKWrqDPFZY9+OU+3LhqYB0k+IxSopZjYCc2KxC0lZ3ZUVRcsxAAEqKWbFVVuD7MHQG+o4k+HrN8fHcr+mOXlmM33XPUZsQ+Y3y/VHEzvyJSAZyByUfCw4yw2zj0uKdFVzrcMVACqOCm28jlOTD4IKc7nM/Enh+E9kmpqPBllcruqTbeCq42nkChFDBlLC+o5nuuNPjPOtq7OfDuab5SRrdTmVhzB+U23SrpmiXpUCHfcxB6q9hI3nsHwmd2XsfE4/941lQaK2UAHXcovuvxveaTSlAiy9x/RXE0tcmdRxQg+Y4SkdCpswIPIgg/GVk2NaOiNAYJMj3kJigwjqUyJxqYqPeJUOgmrYkhsI2EzuLoRwkd45TAdHINI2PWWdpYW0kXdGGWmwNlNiayUVNgTd235UHvHv4DtM1vQn6PdHquMfKnVRffqMOqo5D7TdnnYT1bYGwcNhh+5UF7WaobFzz14DsFh6xKtKnhqS0qahEQEkcTbiTxYnU8zIujuJL3Y8S1hyA3Cc7bW5NL6ZTaaqbD617gjQrrprzl7tPFhFI4nh8pS4fDZwXa57uAmYpuC24V/d4gZlOga28ds7sTWFKnTakuekC+cX1yMSdO43nO2EQ6FRY9/4xHwvUpim7JZWNveXrOxNwd+6UUnSrofTxiCtRyliOq1tfuOOI17xPKcVs2tSqexdGD3ACgE5r7ilveB7J7DhjXw7kjVHPWymw77cDO2viKTMKjKGdA2VioLLm96zEaX7JFl0wmxeiQoZXxFvaWzZdCKY4Ani/wHDmd3TcpTCUxldxcsfqIdx7Gbh2a75T4Ue2ql39xQXfkEXcB36L4yk6UbYqKhfXM7EL9lbC+g42FgJU3urnavSDDYFQvWd2BIVLHxZjoov3k8pgNu9LcTibqT7ND/00JGn8TaFvgJSVKpc3YknmSSY+jqJGtLXolsE4qqARamli558kHz7O+e2YDZ4ygKAiKAqgDgNwAnnP0abSb24wzZcjh2XQBs62a1xvBAO/kJ65AqsVQyHfcHj+Mz+2thU66+6Cd4tYHvU8D2bpqNsn92f1wMpMA1lYk9UWl2zXlm1tkPQNz1kJsGtax+yw+q3Z5StaeubVwaOhYrdHFqg7DubvHPu5TyrH4Y03em29CR3jgfK0srLlhCEoUGKWvGGMzSbE0JH7SELo6ES8LyokBj0kIaPUyxKlE3f0dUwrl+bhfALe3/dMHmm76GVMqIObFh4m3pF6I1HS2qbhB9YjxA/P0ldgXq4frEdRuPInj2CdnSe+ek/AhfznUih0AOoK2PlaYaV9eqzm5N5abGrZbd+U+O6UeFvdkPvJcd4H5eonfgH6xHMfEQsXeNw1usu7iOUrK9XI6qd2RAe8i9/jL/3k719RMltSpbEMOBCAd4RRItWdRAQRzlORLTCPmXtGh+RlLj8WlJGd2so8yeAA4nslZduK9nh8PdsqB+u5PBF90G/Mm88h25th8TVz6hFuEX7K9vad5/KWvS3pNUxpAy5EW1kDZi2UdUsbDdqbWtczMAcPCw+AEjUmkypnOg15b7907MTs96KIXBXOCwBBBABtqDu4aTddDOjXsh7Rx+8Ya7uov2R/EePlI/pYwGSnhXt9aoh8VRl8eqYN+WW6JYxUxuFe/wD1UX+s5D/dPf3cLqTYT5koVMjo/wBhlfxVgR6T6DeuX6x46jkLyKj2zi8yhRuvpzPG8ra2gCDhv7WMmqPd+xAT4j85HhEzPflr48Jpl21LKhvuAt8N0806aYTK6VAR11ykX1unG3KxGvYJv8bWuco3Df3zN9OMBfBLW4rWVf5GRwf+4JESvPoRCYhM0hrmNvEvJlFheRozIeR8jCPzNyhCEEUmNBheVCxbxt4XgThp6FgqBpU8O3OmjHvYZj6mecK2+eu46h/p0/hRB5IPwMWi22lRD0Ef7DA+B1+cgwFS6kcj8DOrYj58Oy9np/gTO7M2iq1TSdrNcrrx5a/rfMKMY/s8QW7QfA2vLBhkcW3XBHcf8zi6QU7Orc1t4gn5ETrpHPSVuK6Hulo1FN7Ur8lI+Uw3SvGolY5ms2hsAzECwsSFBsNOM1yVv9Op5/LU+kxu3GY4irlyrZxckElz7OmbmxGgDBRv92ItWWxMYlQZkZWUjepB1G8d/ZPPOlm0xWqhUJKU7r2M1+sw8rX7I3b+0HpVQKZCPlu70mdHfMTYOVtewHfrKQNfXfFWCbDoJsRXY12UllayE+6LDrOOZvcecp9k9H3ro9W+SmpVM28lmvbKOWmp8p6NsPZSCihxDNlUKop0WqorkAgAKlncmxYjUDloTIVpNn4OwDEWA3X4nn2zL/S7RzYJW+xWQ92dWX5iXdHAIjBqQr4d2uEDu7U3YDMEdM7LrY78rWvYgiUfTXaK4nZjugI0VnU70enUGdD2gqwhXjJE9w2PjM2EoOd7Uqf9WRQfjeeHz1Hoxir4GkTuRHX+hmHyiJV9RfqMftEDyJJ9JJWrezRVHvufIcT5Tk2U/wC5QtuAzt8PzkC1i7tUbcBYdg5S6ZTKbtbkB5t+Q+Mm+kCjk2aV5PSPiXF/WJsinmZSd7Nm/CdX0lj/AEFT79L/AMixO1jxiROY8mIolqBFkl428WEptjCOhKIhFjLxQYDogMW8SANuPdPcSmakB/AvoJ4cNZ7lgWuluWklIg6KVbOyHjcfOZ/pPgSHLrcEa3G/T58ZYKxpYg201uPWdm26gDq/1XuD2Hff4yVpzUKn7Vhg/wBddD94b/MWMfsJ9GQ/r9azg2e/7PiMu6nW3clcf5lviMPkcVE3Xs4HI8YHQzstMoTopsP5je8xfTba4oYmsqlWLEELcXpuERWzD7Ngrfzct2i6Q7VWk1GmLM9apTRE13M4UuQNcov52E836fNfaOKP/IB5IohZFC9RmYsxJYm5J3knfO7AYN6gd1RslMBqjD3VW4vv42N7SLZWz2r1VprpmOrfZUe809XXYaKlLD5bUgruyfbdAmQOfrDrOx5kCDpy4CsjYasqEFVekoI93TPu523X5zQ7Ep56aulhVp6ox3a6OjfwsNDy0I1AmZ2bhgi4qmoARRRcKNysajq1uw2BtzvNB0Qq9Zk/W78oRcYyoKtOmRcH21FrH3lNGqj1FNuKhHB4eBmUr4O+BxQt/u/tVRRyDu7p8LGabbNIIylVC+2bJUfXNly3CLrZc+TKWGu7jYjlxVsjC2hUqB94Wt8ZIteAgzcdG8T/AKFk453XwbKfVph090dwmo6IVAc1M/bVz3Aa/FV84kL02dd8qKg5C8eyWVUG9jc9369JHQGZy7bhqflJ8KCzM57hNMrjYy9cdlvURfpGF8BV+9T/APIkNjHr+I9ZF9Jda2CdeLMnkHUye1eNNGxSYkqFEWIIyo9pTR94Tmue2EGj4RFMW8gLwMLxIElL3l+8PWe0bMrA37RfxG8TxjDHroP40/uE9T2XXyvbx/H4eklHTtxMro4/REnrAVKPapGvfuMl23TzU8w+qQfA6H1ErtmV9Cp5EeHA+BlVwYkEoUPvp1k53GtvhLUbepphjXqHqqALCxLE+6oHEmQYqhmFx7w+M876T1mBWlfqqWe3C593yBPmZKR39HcQcXtajUKkZqucKWLhVRGZRfl1QfGVfTGpmx+Kb/mcf0nL/wCst/osA/8AkUvbSnVI78gHoTHYTZIbEVK1Zbl3aqink7s12HMAobcL+U0tunT0C2cyurm9nDKwtYpla6+YzfCekMgJB4i9vGZbD4z2CVK2RnyIWyrYE2/zc9xhsvp3havVctRb+OxQ9zrf4gSnazwODP8AqzwaknddM5t6zh6PbRVMSiEN1wozAdRCzZUDt9XM3VHbO+htGkyYqolZXRKZVshzJncgJqNM28fzSPo7s4NmDj3zrbeBoEse5c3fCND0mH7gkb0em470dW/9fjKOpjkqaobqrMtxuJRspt2XUy86TLfDOCjVMwtkXQuTey3uLAnQm+68xmwWT2WRFZcjMrKyqtnuS1spKlbk2ykgbuEkWsZV6JVQ7XdFBJItmY5STluLDW1uM7tibH9jUds+ey5T1coubHmeU0WJa7t328pzYPTO38Zt3jQeVppNux9FCDebFu87hOzRE7h5mcmBp3bNy9TFx9S5yjcN/fCLTo++tzxJPxE4fpBr56FT+T+9dJ07HNsp5lpT9MMQDQcbySpPYM4PnpIPOrQtGvUAkbVSY2ukrVAJzloQja6JeLCEIVDwj5ADJFa8ofCJeF4R27Gp5sRRXeDVQHuzi89GxNI0qhHI3HaJguiS3x2FHOsnrf5T1jpBg7gsBqnxX9WgSUOvTKdhHgRp+uyZmmxQ34g2PzEt9k4i1v6T8pxbVo5KjDgesPH85IOulUDC4/xPPenNDLXUjcwPy/Ga1KhU3BlD0xT2po6WLVFTT+I2084pO3P9HuGcYlcQLhKYcX+2zIy5Rztmue4TQ7VBDF1BJQ3IG9lIGYDt0BHaAOMttq4VaPs1pqFVFyqBusP14yvrPdieZlW139HaqvcghlYeBBBFtfSY/pb0Oai4fDLmp1HCBARmR3PVUX3odbHhx0l/suiKdQuhdQxGdUXOLnTOEAJuDa9t9zcSzx2Hq18jLiaGak61EVVYK7rwqXclRYsLDcTfskWM7sjoY1HK1d7m4b2aElAVIsX+0w4aT0LYtPVe258ACBMrt+piqlNgHw+Ht7p9qjMzHm7AKiAX196d+x9sqiLRw2bG1lQLdGZkDW6z1KxuqLvO/sAvIi+6S1LolEGzVqgXTf7NetVPZ1BkvwLrKjEoAxAAAFrACwAsLADlOvD4R1Y1K7ipXYWYoCKdNL3FKkp3LxLHVjv3ADkxZ658vIQtUeI99u8zlwx0P3n/ALjOrGGzsfH4SDYyZlBO4XY+c0ytEORO0+p/CV5POS4mtnN+A3fjIdmPnux3KTfuG71gWT1MiAfWtp8zM70iU/s1VuWTzLrLOtULNc+HZObpPSK4Gpp9gnsu6Qrza8LxITKwt4XiQlUt4RIQEgDCErKRWvHSEGSI14F10QfLjsKT/wDcnxNvnPctp0eJ3EZT+u70nz9sytkrUnvbJUpt4K6k/C8+jsTTDqQO8fKSkYMp7KoVPut+hJ9pJnRX4rdT3b527YwmdLgdZfTiJV4bE3GQmx4Hu3eMIr5yYugHqYYHhXQ+WvylhWTrEbjy4HtEiXR6V+FRPW3zl9DSdK6eXJ4f2zNzU9MNyntHo34TLROh1bNezj9bjeallB3gHvAMyeD98ePpNYh0HcJKqI4VPsJ/Qn4TopvlBVbKDvsAPSJAwGO+UE8pUMbm/PWdOMrXOUbh8TOaBSbWe2c9nraQ4BrUgOdyfM2ETa73VjzI9fyjkYIi30AVfQSoMS5C2HvN1VHaZ1CiKSLTG/e0ds6h/wBVxb7IP1R+MiqPmYnmf8QOjAYcu4AF92npLD6QMKKWy6oHvFqWY9vtUlx0ZwGRcxHWPqeH65yo+lPFqMDUTeS9K/YBUU+eklrUeJwvCEKLwvCEAvCEIBCEJWQItLfCEFSNPpbDe4vcPWLCSkVWJ95v5pi63vHv+cWERHRj96zlre9S/wD0p/3CLCX0NR0w91O9fRplYQidF7T4P3x4+k1dLcO4QhJVPiNuPcYQgUxgYQhGax/uN4esixG6l3L6CEJRon/2/wCT5Svw/vr96EIHoOy/c8fkJ559JH+xV++n96xYTPtqPLDCEJVEIQgEIQgf/9k=",
            id: 9,
            OweMoney: "nothing"
        }
    ]


 



    const [isOpen, setIsOpen] = React.useState(false)
    const [item, setItem] = React.useState(Users);

    const Datarecieve = (Data) => {
        console.log('child se arha ', Data)

        setItem((prev) => [...prev, Data])
    }
    console.log(item)

    function handleAddFriend() {
        console.log("add friend conponent open!!");
        setIsOpen((isOpen) => !isOpen)
    }

    // function handleAdd() {

    // }
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    item.map((val, ind) => {
                        return (
                            <>
                                <ListItem alignItems="flex-start" key={ind}>

                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp" src={val.image} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={val.addFriend}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {val.OweMoney}
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                    <Button variant="contained" >Select</Button>
                                </ListItem>
                            </>
                        )
                    })
                }
                <Divider variant="inset" component="li" />
            </List>
            <Button variant="contained" onClick={handleAddFriend} >Add Friend</Button>
            {
                isOpen === true ? <AddFriend onDataRecieve={Datarecieve} /> : ""
            }
        </>
    );
}

export default ListOfFriends;
