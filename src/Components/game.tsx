import React, { useEffect, useState } from 'react';
import { InputNumber, Checkbox, Tooltip, Modal, Table, Button } from 'antd';
import { ArrowRightOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
import './index.css'
import classnames from 'classnames'
import Anh1 from "./Anh1.png"
import Anh2 from "./Anh2.png"
import Anh3 from "./Anh3.png"
import Anh4 from "./Anh4.png"
import Anh5 from "./Anh5.png"
import Anh6 from "./Anh6.png"
import Anh7 from "./Anh7.png"
import { dataAnimal, dataBase } from './IModel';

interface IProps {
}
function Game(props: IProps) {
    const [dice, setDice] = useState<string[]>([])
    const [isDice, setIsDice] = useState<boolean>(false)
    const [money, setMoney] = useState<number>(2000)
    const [listMoney, setListMoney] = useState<number[]>([0, 0, 0, 0, 0, 0])
    useEffect(() => {
        var arr = [_getRandom(), _getRandom(), _getRandom()]
        setDice(arr)
    }, [])

    // useEffect(() => {
    //     if (isDice === true && dice.length == 3) {
    //         setTimeout(() => {
    //             setIsDice(false)
    //         }, 1200);
    //     }
    // }, [isDice])
    const onChangeInput = (value: number | null) => {
        setMoney(value ? value : 0);
    }
    const _getRandom = () => {
        let number = Math.floor(Math.random() * 6);
        console.log("number", number);

        return dataAnimal[number]
    }


    const onHandleDice = () => {
        if (isDice === false) {
            // setDice([])
            setIsDice(true)
            var dice1 = _getRandom()
            var dice2 = _getRandom()
            var dice3 = _getRandom()
            setDice([dice1])
            setTimeout(() => {
                // var data = [...dsice, _getRandom()]
                setDice([dice1, dice2])
                // setDice(data)
                setTimeout(() => {
                    // var data = [...dice, _getRandom()]
                    setDice([dice1, dice2, dice3])
                    // setDice(data)
                    setTimeout(() => {
                        setIsDice(false)
                    }, 600);
                }, 400);
            }, 400);
        }
    }
    const getImage = (data: string) => {
        return dataBase?.find(a => a.type === data)?.image;
    }
    const _renderThreeDice = () => {
        return <>
            {dice.map((a, index) => {
                return <div className={classnames('dice-item', { 'animation': isDice })} key={"dice-a_" + index}> <img src={getImage(a)} /></div>
            })}
        </>
    }
    return (<>
        <div className='d-flex'>
            <div>
                <div className='' style={{ padding: "20px" }}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>{_renderThreeDice()}</div>
                        <Button type="primary" size={"large"}
                            onClick={() => { onHandleDice() }}>
                            Dice
                        </Button>
                    </div>
                </div>
                <div className='wrapper-layout-baucua'>
                    {dataBase.map(a => {
                        return <div key={"round_" + a.id} className={classnames(a.clsName, { 'actived': isDice && dice.includes(a.type) })}></div>
                    })}
                    <img src={Anh7} />
                </div>
            </div>
            <div style={{ padding: "20px" }}>
                <div className='d-flex align-items-center'>
                    <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money - 1000 > 0 ? money - 1000 : 0) }}><MinusCircleOutlined /></div>
                    <InputNumber<number>
                        style={{ width: '200px' }}
                        value={money}
                        suffix="VND"
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                        parser={(value) => value?.replace(/\$\s?|(,*)/g, '') as unknown as number}
                        onChange={onChangeInput}
                    />
                    <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                </div>

                <div>
                    <div style={{ fontWeight: 600, fontSize: "28px" }}>Bạn đã đặt cược</div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3 cursor-pointer' onClick={() => { var temp = listMoney[0] - 1000 > 0 ? listMoney[0] - 1000 : 0 }}><MinusCircleOutlined /></div>
                        <div>Hổ: {listMoney[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money - 1000 > 0 ? money - 1000 : 0) }}><MinusCircleOutlined /></div>
                        <div>Bầu: {listMoney[1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money - 1000 > 0 ? money - 1000 : 0) }}><MinusCircleOutlined /></div>
                        <div>Gà: {listMoney[2].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money - 1000 > 0 ? money - 1000 : 0) }}><MinusCircleOutlined /></div>
                        <div>Tôm: {listMoney[3].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money - 1000 > 0 ? money - 1000 : 0) }}><MinusCircleOutlined /></div>
                        <div>Cá: {listMoney[4].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money - 1000 > 0 ? money - 1000 : 0) }}><MinusCircleOutlined /></div>
                        <div>Cua: {listMoney[5].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
                        <div className='mx-3 cursor-pointer' onClick={() => { setMoney(money + 1000) }}><PlusCircleOutlined /></div>
                    </div>
                </div>
            </div>
        </div >
    </>
    );

}

export default Game;