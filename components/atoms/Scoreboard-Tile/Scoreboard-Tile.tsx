import styles from "@/components/atoms/Scoreboard-Tile/Scoreboard-Tile.module.scss";
import cs from "classnames";
import BrushSVG from "@/public/icons/brush2.svg";

export interface ScoreboardTileProps {
    img: string,
    name: string,
    points: number,
    active: boolean,
    me: boolean,
    drawer: boolean

}
export default function ScoreboardTile({img, name, points, active, me, drawer}:ScoreboardTileProps) {
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
                {drawer&&
                    <BrushSVG/>
                }
                <div className={styles.pointsWrapper}>
                    {points}
                </div>
            </div>
        </div>
        }
            <div className={styles.scoreboardTileWrapper}>
                <div className={styles.image} style={{backgroundImage: `url(${img})`}}>
                    {active&&
                        <div className={styles.active}></div>
                    }
                </div>
                <div className={styles.name}>{name}</div>
                {drawer&&
                    <BrushSVG/>
                }
                <div className={styles.pointsWrapper}>
                    {points}
                </div>
            </div>

        </>
    );
}