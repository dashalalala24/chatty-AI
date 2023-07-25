import './WaveAnimation.css';
import record from '../../../utils/MediaStream';

function WaveAnimation() {
  return (
    <section className='wave__section'>
      <canvas className='wave__canvas' id='wave-canvas'>

      </canvas>
      <div>
        <button className='wave__record-button' type='button' onClick={record} id='record-button' />
        <h2 className='wave__subtitle'>Помогу в работе. Только спроси</h2>
      </div>
    </section>

  );
}

export default WaveAnimation;
