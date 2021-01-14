import TypeWriterEffect from 'react-typewriter-effect';

const TypeWriterEffectComponent = ({
    multiText,
    textStyle,
    loop,
    typeSpeed,
    nextTextDelay,
    cursorColor,
    startDelay,
}) => (
    <TypeWriterEffect
        textStyle={textStyle}
        startDelay={startDelay}
        cursorColor={cursorColor}
        multiText={multiText}
        loop={loop}
        nextTextDelay={nextTextDelay}
        typeSpeed={typeSpeed}
    />
)

export default TypeWriterEffectComponent