package com.school.school.service.imp;

import com.school.school.domain.Score;
import com.school.school.mapper.ScoreMapper;
import com.school.school.service.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    ScoreMapper scoreMapper;

    @Override
    public Score getAllScoreByStuNo(String stuNo) {
        return scoreMapper.getAllScoreByStuNo(stuNo);
    }

    @Override
    public List getAllScore(String stuNo) {
        return scoreMapper.getAllScore(stuNo);
    }
}
