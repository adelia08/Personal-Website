export default function TimelineCard(props) {
    return (
      <div class="timeline">
        <div class="outer">
          <div key={props.id} class="card">
            <div class="info">
              <h3 class="title">{props.job}</h3>
              <h3 class="title">{props.company}</h3>
              <h3 class="title">{props.date}</h3>
              <br />
              <p>{props.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  