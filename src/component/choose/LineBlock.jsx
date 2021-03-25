export default function LineBlock(props){
    const {
        refVal,
        lineHeight,
        classOf
    } = props;
    const heightStyle = {
        height: `${lineHeight}px`
    }
    return (
        <div className={classOf} style={heightStyle} ref={refVal}>
            
        </div>
    )
}