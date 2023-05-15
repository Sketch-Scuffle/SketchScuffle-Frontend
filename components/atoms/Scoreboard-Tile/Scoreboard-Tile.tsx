import styles from "@/components/atoms/Scoreboard-Tile/Scoreboard-Tile.module.scss";
import Image from "next/image";
export interface ScoreboardTileProps {
    img: string,
    name: string,
    points: number,
    active: boolean,
    me: boolean,
    drawer: boolean,
    nextdrawer: boolean,
}
export default function ScoreboardTile({img, name, points, active, me, drawer, nextdrawer}:ScoreboardTileProps) {
    return(
        <>
        {me &&
        <div className={styles.border}>
            <div className={styles.scoreboardTileWrapper}>
                <div className={styles.image} style={{backgroundImage: `url(${img})`}}>
                    {active&&
                        <div className={styles.active}></div>
                    }
                </div>
                <div className={styles.name}>{name}</div>
                {drawer &&
                    <Image src="/icons/brush2.svg" alt="" width={16} height={16}/>
                }
                <div className={styles.pointsWrapper}>
                    {points}
                </div>
            </div>
        </div>
        }
        {!me &&
            <div className={styles.scoreboardTileWrapper}>
                <div className={styles.image} style={{backgroundImage: `url(${img})`}}>
                    {active&&
                        <div className={styles.active}></div>
                    }
                </div>
                <div className={styles.name}>{name}</div>
                {!nextdrawer &&
                    <div style={{width: '16px' , height: '16px'}}>
                        {drawer&&
                            <Image src="/icons/brush2.svg" alt="" width={16} height={16}/>
                        }
                    </div>
                }
                <div className={styles.pointsWrapper}>
                    {points}
                </div>
            </div>
        }
        </>
    )
}