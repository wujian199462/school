package com.school.school.service.imp;

import com.school.school.domain.Score;
import com.school.school.mapper.ScoreMapper;
import com.school.school.mapper.TeacherMapper;
import com.school.school.service.ScoreService;
import com.school.school.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {

    @Autowired
    TeacherMapper teacherMapper;


    @Override
    public List getAllTeacher() {
        return teacherMapper.getAllTeacher();
    }
}
