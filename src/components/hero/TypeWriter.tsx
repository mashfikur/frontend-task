import Typewriter from "typewriter-effect";
const TypeWriter = ({ text }: { text: string }) => {
  return (
    <div>
      <Typewriter
        options={{
          strings: [text],
          autoStart: true,
          loop: true,
          delay: 300,
        }}
      />
    </div>
  );
};

export default TypeWriter;
