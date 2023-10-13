import styles from "@/styles/call.module.scss";
// @ts-ignore
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


interface Props {
    exclude_header?: boolean;
}

export const Call = (props: Props) => {



    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#161616" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])

    return (
        <div className={styles.call_wrapper} id="call">
            {!props.exclude_header && <div className={styles.header}>
                <h2>
                    Got an idea?
                    <br />
                    Book a call today to see how we
                    can
                    <br />
                    turn your dream into a reality.
                </h2>
            </div>}

            {/* Cal.com  */}
            <Cal
                calLink="matt-boan-d427d9/30min"
                style={{ width: "90%", height: "100%", overflow: "scroll", marginLeft: "20px" }}
                config={{ layout: 'month_view', focus: "null" }}
            />
            <div className={styles.footer}>
            </div>
        </div>
    )
}