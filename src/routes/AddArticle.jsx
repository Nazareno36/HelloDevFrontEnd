import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Input from "../components/Input";
import InputFile from "../components/InputFile";

const SendArticle = () => {
	return (
		<>
			<Header />
			<div
				className="flex justify-center min-h-[93vh] bg-cover"
				style={{
					background:
						"url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
				}}
			>
				<div className="flex flex-col place-items-center justify-center pb-10 pt-5">
					<div className="w-full rounded-lg shadow bg-slate-900 border-gray-700 bg-opacity-70">
						<div className="col-span-2 grid grid-cols-5 grid-rows-14 m-6">
							<h1 className="col-start-1 col-span-5 grid place-items-center font-extrabold text-5xl text-white mb-4">
								Agregar Articulo
							</h1>
							<Input
								label="Titulo Articulo"
								type="text"
								id="tittle"
								placeholder="Titulo"
								style="col-start-1 col-span-5"
							/>
							<h3 className="col-span-5">Resumen</h3>
							<textarea
								className="col-span-5"
								placeholder=" Resumen..."
								required
							/>
							<h3 className="col-start-1 col-span-2 mt-5">
								Archivo del Articulo
							</h3>
							<h3 className="col-start-4 col-span-2 mt-5">Portada</h3>
							<div className="col-start-1 col-span-2 items-center justify-center w-full">
								<InputFile placeholder="PDF, WORD, or TXT (MAX. 800x400px)" />
							</div>
							<div className="col-start-4 col-span-2 items-center justify-center w-full">
								<InputFile placeholder="SVG, PNG, JPG or GIF (MAX. 800x400px)" />
							</div>
							<div className="col-start-3 grid place-items-center">
								<Link to="/AuthorArticles">
									<button
										type="submit"
										className=" mt-5 text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-md p-2"
									>
										Agregar
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default SendArticle;
