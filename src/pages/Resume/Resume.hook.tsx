//TODO: path is working, need to change later
import { careersQuery } from "../../services/queries/resume";

export default function useResume() {
    const resume = careersQuery({docType:"BASIC", careerType:"RESUME"});
  return {resume};
}