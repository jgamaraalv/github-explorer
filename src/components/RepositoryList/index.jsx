import { useState, useEffect } from "react";
import "./repositories.scss";

export function RepositoryItem({ repository }) {
  return(
    <li>
			<strong>{repository.name}</strong>
			<p>{repository.description}</p>

			<a href={repository.html_url}>
				Acessar repositório
			</a>					
		</li>
  )
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/jgamaraalv/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
        {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository}/>)}
			</ul>
		</section>
	)
}