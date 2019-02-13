package com.school.school.controller;

import com.school.school.domain.Teacher;
import com.school.school.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/teacher")
public class TeacherController {

    @Autowired
    TeacherService teacherService;

    @ResponseBody
    @RequestMapping("/getAllTeacher")
    public List<Teacher> getAllTeacher(){
        List list = teacherService.getAllTeacher();
        return teacherService.getAllTeacher();
    }
}
