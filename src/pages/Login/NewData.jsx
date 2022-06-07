import colors from '../../shared/themes/Colors';
import { SvgBronze, SvgCrown, SvgOuro, SvgPlatina } from '../components/Svg';
import {
	Alert,
	Avatar,
	Box,
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormGroup,
	FormLabel,
	InputAdornment,
	InputLabel,
	MenuItem,
	Modal,
	Radio,
	RadioGroup,
	Select,
	Stack,
	Tab,
	Tabs,
	TextField,
} from '@mui/material';
import {
	AccountCircle,
	AddCircle,
	AddCircleOutline,
	AddCircleOutlined,
	Bookmark,
	CommentOutlined,
	Edit,
	FavoriteBorder,
	FilterAlt,
	Image,
	InsertDriveFile,
	Leaderboard,
	Lock,
	MoreHoriz,
	Person,
	PersonOutlined,
	VideoLibrary,
} from '@mui/icons-material';
import { UserService } from '../services/api/user/UserService.js';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import Img1 from '../../../public/banner.svg';
import { LogoBlue } from '../../../public/LogoBruno';

export default function NewData() {
	return (
		<section className={styles.ContainerLogin}>
			<div className={styles.BannerLogin}>
				<div>
					<LogoBlue width={164} />
				</div>
				<figure>
					<img src="http://10.107.144.26:8080/uploads/d317b06a-abcd-40ae-aa15-fc6a80df9e6f.png" />
				</figure>
			</div>
			<div className={styles.DadosLogin}>
				<div>
					<h2>Login</h2>
					<p>
						Atualize sua senha para não perder acesso
						<br />a sua conta
					</p>
					<TextField
						required
						id="filled-required"
						label="Nova senha"
						defaultValue=""
						variant="outlined"
						type="password"
						sx={{ marginBottom: 2 }}
						fullWidth
					/>
					<TextField
						required
						id="filled-required"
						label="Confirme sua senha"
						defaultValue=""
						type="password"
						variant="outlined"
						sx={{ marginBottom: 2 }}
						fullWidth
					/>
					<div
						style={{
							width: '100%',
							textAlign: 'end',
							marginTop: 30,
						}}>
						<Button sx={{ width: '40%' }} variant="contained">
							{' '}
							Entrar
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
