package com.tarun.TalkBuddy.controller;

import com.tarun.TalkBuddy.model.Intern;
import org.springframework.expression.ExpressionException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/interns")
public class InternController extends MainController{


    @GetMapping("/")
    public List<Intern> findAll()
    {
        return internRepository.findAll();
    }

    @GetMapping("/{id}/assign_task")
    public Intern assignTask(@PathVariable(name = "id") long internId,@RequestParam List<String> taskIds)
    {

        Intern intern = internRepository.findById(internId).orElseThrow(()->new ExpressionException("Invalid id"));
        intern.getTasks().addAll(
                taskRepository.findAllById(taskIds.stream().map(Long::parseLong).collect(Collectors.toList())));
        return internRepository.save(intern);

    }

    @GetMapping("/{id}")
    public Intern getIntern(@PathVariable(name="id") long internId)throws  Exception
    {
        return internRepository.findById(internId).orElseThrow(()->new ExpressionException("No Such Intern Found"));
    }

    @PostMapping("/")
    public Intern createIntern(@Valid @RequestBody Intern intern)
    {
        return internRepository.save(intern);
    }


    @DeleteMapping("/{id}/remove_task")
    public Intern removeTask(@PathVariable(name="id") long internId,@RequestParam List<String> taskIds)throws Exception
    {
        Set<Long> tasks = new HashSet<>(
                taskIds.stream().map(Long::parseLong).collect(Collectors.toList())
        );
        Intern intern = internRepository.findById(internId).orElseThrow(()->new ExpressionException("No such Intern"));
        intern.getTasks().removeIf(x->tasks.contains(x.getId()));
        return internRepository.save(intern);
    }




}