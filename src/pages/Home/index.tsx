import React, { useState, useEffect, useCallback, useRef } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";

import api from "../../services/api";

import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import {
    Container,
    Header,
    Menu,
    List,
    Cover,
    NewTool,
    ConfirmDelete,
} from "./styles";

interface Tool {
    id: number;
    title: string;
    link: string;
    description: string;
    tags: string[];
}

interface FormAddTool {
    title: string;
    link: string;
    description: string;
    tagString: string;
}

interface FormSearch {
    search: string;
    onlyTags: boolean;
}

const Home: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const [tools, setTools] = useState<Tool[]>([]);
    const [tool, setTool] = useState<Tool>({} as Tool);
    const [addTools, setAddTools] = useState(false);
    const [removeTool, setRemoveTool] = useState(false);

    useEffect(() => {
        async function getTools(): Promise<void> {
            const response = await api.get("/tools");
            setTools(response.data);
        }

        getTools();
    }, [setTools]);

    const handleSubimitSearch = useCallback(
        async (data: FormSearch) => {
            if (data.onlyTags) {
                const response = await api.get(
                    `/tools?tags_like=${data.search}`,
                );
                setTools(response.data);
            } else {
                const response = await api.get(`/tools?q=${data.search}`);
                setTools(response.data);
            }
        },
        [setTools],
    );

    function handleSubmitOpenAdd() {
        addTools ? setAddTools(false) : setAddTools(true);
    }

    const handleSubimitAdd = useCallback(
        async (data: FormAddTool, { reset }) => {
            const { title, link, description, tagString } = data;
            const tags = tagString.split(" ");
            const response = await api.post("/tools", {
                title,
                link,
                description,
                tags,
            });
            reset();
            alert("Cadastrado com sucesso!");
            setAddTools(false);
            setTools([response.data, ...tools]);
        },
        [setTools, tools],
    );

    function handleRemoveTool(data: Tool) {
        removeTool ? setRemoveTool(false) : setRemoveTool(true);
        setTool(data);
    }

    const handleDeleteTool = useCallback(
        async (data: Tool) => {
            await api.delete(`/tools/${data.id}`);
            const newTools = tools.filter((tool) => tool !== data);
            setRemoveTool(false);
            alert("Deletado com sucesso!");
            setTools(newTools);
        },
        [setTools, tools],
    );

    return (
        <>
            <Cover isVisibleAdd={addTools} isVisibleRemove={removeTool} />
            <Container>
                <Header>
                    <h1>VUTTR</h1>
                    <p>Very Useful Tools to Remember</p>
                </Header>
                <Menu>
                    <Form onSubmit={handleSubimitSearch} ref={formRef}>
                        <Input
                            name="search"
                            type="text"
                            placeholder="search"
                            icon={FiSearch}
                        />
                        <Checkbox name="onlyTags" />
                        <label>search in tags only</label>
                    </Form>
                    <button onClick={() => handleSubmitOpenAdd()}>Add</button>
                </Menu>
                <List>
                    {tools.map((tool) => (
                        <section className="card" key={tool.id}>
                            <a href={tool.link} target="_blank">
                                {tool.title}
                            </a>
                            <button onClick={() => handleRemoveTool(tool)}>
                                remove
                            </button>
                            <p>{tool.description}</p>
                            <p>
                                {tool.tags.map((tag) => (
                                    <strong key={tag}>{tag}</strong>
                                ))}
                            </p>
                        </section>
                    ))}
                </List>
            </Container>
            <NewTool isVisible={addTools}>
                <h1>Add new tool</h1>
                <button onClick={() => handleSubmitOpenAdd()}>
                    <FiX size={25} />
                </button>
                <Form onSubmit={handleSubimitAdd}>
                    <p>Tool name</p>
                    <Input type="text" name="title" />
                    <p>Tool link</p>
                    <Input type="text" name="link" />
                    <p>Tool description</p>
                    <Input type="text" name="description" />
                    <p>Tags</p>
                    <Input type="text" name="tagString" />

                    <div className="button-right">
                        <button>Add tool</button>
                    </div>
                </Form>
            </NewTool>
            <ConfirmDelete isVisible={removeTool}>
                <header>
                    <FiX size={25} />
                    <h1>Remove Tool</h1>
                </header>
                <p>Are you sure you want to remove this?</p>
                <div className="buttons">
                    <button onClick={() => handleRemoveTool({} as Tool)}>
                        Cancel
                    </button>
                    <button onClick={() => handleDeleteTool(tool)}>
                        Confirm
                    </button>
                </div>
            </ConfirmDelete>
        </>
    );
};

export default Home;
