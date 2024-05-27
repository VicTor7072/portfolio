import { techs } from '../data/techs';
import { TTechs } from '../types/techs';
import Button from './ui/Button';
import Section from './ui/Section';
import Title from './ui/Title';

const Techs = () => {
	const techChunks = techs.reduce(
		(result: TTechs[][], item: TTechs, index: number) => {
			const chunkIndex = Math.floor(index / 4);
			if (!result[chunkIndex]) {
				result[chunkIndex] = []; // start a new chunk
			}
			result[chunkIndex].push(item);
			return result;
		},
		[]
	);
	console.log(techChunks);

	return (
		<Section number="03" id="techs" className="md:flex-col">
			<div className="grid w-full grid-cols-1 gap-14 gap-x-20 md:grid-cols-4">
				<div className="flex flex-col gap-y-10 col-span-3 md:col-span-1">
					<Title className="text-1xl md:text-3xl">
						These are the technologies I have learned by creating
						projects
					</Title>

					<Button>
						<a href="#contact">Contact Me</a>
					</Button>
				</div>

				<div className="col-span-3 flex flex-col items-center gap-y-10">
					{techChunks.map((techChunk, i) => (
						<>
							<div className="flex w-5/6 items-center justify-center md:justify-between flex-wrap gap-7" key={i}>
								{techChunk.map((tech) => (
									<img
										src={tech.iconURL}
										title={tech.name}
										alt={tech.name}
										className="h-20"
									/>
								))}
							</div>
							<div className="w-full border-t border-secondary-200 last:hidden"></div>
						</>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Techs;
