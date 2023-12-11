import { projectImage } from "../images/ExportImage";



function Work() {
  return (
    <div className="work-page">
      <div className="work-container-images">
        <div className="proj proj-1">
          <img src={projectImage[0]} alt="proj-1" />
        </div>
        <div className="proj proj-2">
          <img src={projectImage[1]} alt="proj-2" />
        </div>
        <div className="proj proj-3">
          <img src={projectImage[2]} alt="proj-3" />
        </div>
        <div className="proj proj-4">
          <img src={projectImage[3]} alt="proj-4" />
        </div>
        <div className="proj proj-5">
          <img src={projectImage[4]} alt="proj-5" />
        </div>
        <div className="proj proj-6">
          <img src={projectImage[5]} alt="proj-6" />
        </div>
      </div>
    </div>
  );
}

export default Work;
